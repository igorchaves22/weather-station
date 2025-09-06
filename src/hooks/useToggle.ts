import { useCallback, useState } from "react";
import type { IRender } from "~types";
import { useTimeout } from "./useTimeout";

type SingleState = boolean;
type DoubleState = IRender["isRendered"];
type StateType<T extends boolean | undefined> = T extends true ? DoubleState : SingleState;
type ToggleCallbackCondition = boolean | "onBothTransitions";
type CallbackType = (() => void) | { fn: () => void; applyWhenFrom: ToggleCallbackCondition };
type DelayType = boolean | number | { value?: number; applyWhenFrom?: ToggleCallbackCondition };

const INITIAL_STATE = false;
const DEFAULT_DELAY = 400;

export const useToggle = <T extends boolean | undefined = undefined>(initialState?: boolean, doubleMarkers?: T) => {
    const [state, setState] = useState<StateType<T>>(() => {
        const value = initialState ?? INITIAL_STATE;

        if (doubleMarkers) {
            return {
                immediate: value,
                delayed: value
            } as StateType<T>;
        }

        return value as StateType<T>;
    });
    const { resetTimeout, runTimeout } = useTimeout();

    const shouldApplyTransitionTrigger = useCallback(
        (from: boolean, to: boolean, trigger?: ToggleCallbackCondition) => {
            if (!trigger) return false;
            if (trigger === "onBothTransitions") return true;

            return trigger === true ? from && !to : !from && to;
        },
        []
    );
    const applyCallback = useCallback(
        (current: boolean, next: boolean, callback?: CallbackType) => {
            if (!callback) return;
            if (typeof callback === "function") return callback();

            const { fn, applyWhenFrom } = callback;

            if (shouldApplyTransitionTrigger(current, next, applyWhenFrom)) fn();
        },
        [shouldApplyTransitionTrigger]
    );
    const shouldApplyDelay = useCallback(
        (current: boolean, next: boolean, delay?: DelayType) => {
            if (typeof delay === "boolean" || typeof delay === "number") return true;
            if (typeof delay === "object") {
                const { value, applyWhenFrom } = delay;

                if (applyWhenFrom) return shouldApplyTransitionTrigger(current, next, applyWhenFrom);
                if (typeof value === "number") return true;
            }

            return false;
        },
        [shouldApplyTransitionTrigger]
    );
    const applyDelay = useCallback(
        (fn: () => void, delay?: DelayType) => {
            let time = DEFAULT_DELAY;

            if (typeof delay === "number") time = delay;
            if (typeof delay === "object" && delay.value) time = delay.value;

            runTimeout(fn, time);
        },
        [runTimeout]
    );
    const updateState = useCallback(
        (value?: boolean, callback?: CallbackType, delay?: DelayType) =>
            setState((previousState) => {
                const isObjectCurrentState = typeof previousState === "object";
                const currentState = (isObjectCurrentState ? previousState.immediate : previousState) as boolean;
                const nextState = value ?? !currentState;

                if (currentState === nextState) return previousState;

                resetTimeout();
                applyCallback(currentState, nextState, callback);

                if (shouldApplyDelay(currentState, nextState, delay)) {
                    applyDelay(() => {
                        setState(
                            (previousInnerState) =>
                                (typeof previousInnerState === "object" ?
                                    { ...previousInnerState, delayed: nextState }
                                :   nextState) as StateType<T>
                        );
                    }, delay);

                    return isObjectCurrentState ? { ...previousState, immediate: nextState } : previousState;
                }

                return (
                    isObjectCurrentState ?
                        { immediate: nextState, delayed: nextState }
                    :   nextState) as StateType<T>;
            }),
        [applyCallback, applyDelay, resetTimeout, shouldApplyDelay]
    );

    return { state, updateState };
};
