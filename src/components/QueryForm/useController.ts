import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useContext, useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { QueryContext } from "~contexts";
import { useToggle } from "~hooks";
import { getQuery } from "~utils";
import { LOADING_DURATION } from "./constants";
import { schema, type SchemaType } from "./form";

export const useController = () => {
    const { updateQuery } = useContext(QueryContext);
    const [type, setType] = useState<"city" | "coord">(getQuery().city !== undefined ? "city" : "coord");
    const {
        register,
        formState: { errors },
        handleSubmit,
        resetField
    } = useForm<SchemaType>({
        resolver: yupResolver(schema) as Resolver<SchemaType>,
        context: { type },
        defaultValues: {
            unit: getQuery().unit
        }
    });
    const { state: cityStatusIsRendered, updateState: updateCityStatusRender } = useToggle(undefined, true);
    const { state: latStatusIsRendered, updateState: updateLatStatusRender } = useToggle(undefined, true);
    const { state: lonStatusIsRendered, updateState: updateLonStatusRender } = useToggle(undefined, true);

    const toggleType = useCallback(
        (type: "city" | "coord") => {
            setType(type);
            updateCityStatusRender(false);
            updateLatStatusRender(false);
            updateLonStatusRender(false);
            resetField("city");
            resetField("coord");
        },
        [resetField, updateCityStatusRender, updateLatStatusRender, updateLonStatusRender]
    );
    const handleFormSubmit = handleSubmit(
        (data) => {
            updateCityStatusRender(false, undefined, {
                value: LOADING_DURATION,
                applyWhenFrom: true
            });
            updateLatStatusRender(false, undefined, {
                value: LOADING_DURATION,
                applyWhenFrom: true
            });
            updateLonStatusRender(false, undefined, {
                value: LOADING_DURATION,
                applyWhenFrom: true
            });
            updateQuery("unit", data.unit);

            if (data.city) {
                updateQuery("city", data.city);
                updateQuery("coord", undefined);
            }
            if (data.coord) {
                updateQuery("coord", data.coord);
                updateQuery("city", undefined);
            }
        },
        (errors) => {
            if (errors.city) updateCityStatusRender(true);
            if (errors.coord?.lat) updateLatStatusRender(true);
            if (errors.coord?.lon) updateLonStatusRender(true);
        }
    );

    return {
        type,
        toggleType,
        register,
        errors,
        handleFormSubmit,
        cityStatusIsRendered,
        latStatusIsRendered,
        lonStatusIsRendered
    };
};
