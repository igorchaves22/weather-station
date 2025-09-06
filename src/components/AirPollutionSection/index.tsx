import { PieChartBase } from "../PieChartBase";
import { PieChartWithPointer } from "../PieChartWhitePointer";
import { WeatherCard } from "../WeatherCard";
import { useController } from "./useController";
import "./styles.scss";

export const AirPollutionSection = () => {
    const { content } = useController();

    return (
        <section className="air-pollution-section">
            <WeatherCard
                heading={{
                    icon: "ChartPie",
                    title: "Air Quality Index (AQI)",
                    description:
                        "The AQI represents the overall air pollution level. Lower values indicate cleaner, healthier air, while higher values suggest conditions that may impact health."
                }}
            >
                <PieChartWithPointer
                    value={content.aqi.value}
                    data={content.aqi.chartData}
                />
                <p
                    style={{ color: content.aqi.level.color }}
                    className="air-pollution-section__text air-pollution-section__text--aqi"
                >
                    {content.aqi.level.text}
                </p>
            </WeatherCard>
            <WeatherCard
                animationOrder={2}
                heading={{
                    icon: "Atom",
                    title: "Atmospheric Pollution Components",
                    description:
                        "Current concentrations of key pollutants in the air. Monitoring these helps understand which substances are affecting air quality."
                }}
            >
                <PieChartBase data={content.components} />
                <ul className="air-pollution-section__box air-pollution-section__box--list">
                    {content.components.map((item) => (
                        <li
                            key={item.key}
                            style={{ borderLeftColor: item.color }}
                            className="air-pollution-section__box air-pollution-section__box--item"
                        >
                            <p className="air-pollution-section__text">
                                {`${item.name}: `}
                                <strong className="air-pollution-section__text air-pollution-section__text--strong">
                                    {item.value}
                                </strong>
                            </p>
                        </li>
                    ))}
                </ul>
            </WeatherCard>
        </section>
    );
};
