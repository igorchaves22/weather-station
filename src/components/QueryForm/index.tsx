import { renderElementIfTrue } from "~utils";
import { StatusMessage } from "../StatusMessage";
import { COORD_INPUTS, TYPE_OPTIONS, UNIT_OPTIONS } from "./constants";
import { useController } from "./useController";
import "./styles.scss";

export const QueryForm = () => {
    const {
        type,
        toggleType,
        register,
        errors,
        handleFormSubmit,
        cityStatusIsRendered,
        latStatusIsRendered,
        lonStatusIsRendered
    } = useController();

    return (
        <form
            noValidate
            onSubmit={handleFormSubmit}
            className="query-form"
        >
            <section className="query-form__box query-form__box--main">
                <section className="query-form__box query-form__box--type">
                    <p className="query-form__text query-form__text--title">Type</p>
                    <section className="query-form__box query-form__box--column query-form__box--gap-sm">
                        {TYPE_OPTIONS.map((item) => (
                            <div
                                key={item.label}
                                className="query-form__box query-form__box--gap-sm query-form__box--inline"
                            >
                                <input
                                    type="radio"
                                    name="type"
                                    value={item.value}
                                    checked={type === item.value}
                                    onChange={() => toggleType(item.value)}
                                    className="query-form__radio"
                                />
                                <label className="query-form__text query-form__text--label">{item.label}</label>
                            </div>
                        ))}
                    </section>
                </section>
                <section className="query-form__box query-form__box--unit">
                    <p className="query-form__text query-form__text--title">Unit</p>
                    <section className="query-form__box query-form__box--column query-form__box--gap-sm">
                        {UNIT_OPTIONS.map((item) => (
                            <div
                                key={item.label}
                                className="query-form__box query-form__box--gap-sm query-form__box--inline"
                            >
                                <input
                                    type="radio"
                                    value={item.value}
                                    className="query-form__radio"
                                    {...register("unit")}
                                />
                                <label className="query-form__text query-form__text--label">{item.label}</label>
                            </div>
                        ))}
                    </section>
                </section>
                <section className="query-form__box query-form__box--location">
                    <p className="query-form__text query-form__text--title">Location</p>
                    {renderElementIfTrue(
                        type === "city",
                        <div className="query-form__box query-form__box--gap-sm">
                            <label className="query-form__text query-form__text--label">City name</label>
                            <input
                                type="text"
                                placeholder="Tokyo, São Paulo, New York..."
                                className="query-form__field"
                                {...register("city")}
                            />
                            <StatusMessage
                                isRendered={cityStatusIsRendered}
                                isAbsolute
                                status="error"
                                text={errors.city?.message ?? ""}
                            />
                        </div>,
                        <section className="query-form__box query-form__box--inline">
                            {COORD_INPUTS.map((item) => (
                                <div
                                    key={item.name}
                                    className="query-form__box query-form__box--gap-sm"
                                >
                                    <label className="query-form__text query-form__text--label">{item.label}</label>
                                    <input
                                        type="number"
                                        placeholder={item.name === "lat" ? "-23.55" : "-46.63"}
                                        className="query-form__field"
                                        {...register(`coord.${item.name}`)}
                                    />
                                    <StatusMessage
                                        isRendered={item.name === "lat" ? latStatusIsRendered : lonStatusIsRendered}
                                        isAbsolute
                                        status="error"
                                        text={errors.coord?.[item.name]?.message ?? ""}
                                    />
                                </div>
                            ))}
                        </section>
                    )}
                </section>
            </section>
            <button
                type="submit"
                className="query-form__btn"
            >
                search
            </button>
        </form>
    );
};
