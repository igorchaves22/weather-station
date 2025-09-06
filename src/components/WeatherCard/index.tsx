import { memo } from "react";
import { renderElementIfTrue } from "~utils";
import { Icon } from "../Icon";
import { BASE_DELAY } from "./constants";
import type { IWeatherCard } from "./types";
import "./styles.scss";

export const WeatherCard = memo(function WeatherCard({ animationOrder, heading, children }: IWeatherCard) {
    return (
        <section
            style={{ animationDelay: animationOrder ? `${animationOrder * BASE_DELAY}s` : undefined }}
            className="weather-card"
        >
            {renderElementIfTrue(
                heading,
                <section className="weather-card__box weather-card__box--main">
                    <section className="weather-card__box weather-card__box--heading">
                        <Icon
                            icon={heading?.icon ?? "List"}
                            weight="bold"
                        />
                        <h2 className="weather-card__text weather-card__text--title">{heading?.title}</h2>
                    </section>
                    {renderElementIfTrue(
                        heading?.description,
                        <p className="weather-card__text weather-card__text--description">{heading?.description}</p>
                    )}
                </section>
            )}
            <section className="weather-card__box weather-card__box--children">{children}</section>
        </section>
    );
});
