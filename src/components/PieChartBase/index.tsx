import { memo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { DEFAULT_CHART_HEIGHT, PIE_OUTER_RADIUS, TOOLTIP_DECIMALS } from "./constants";
import type { IPieChartBase } from "./types";

export const PieChartBase = memo(function PieChartBase({ height, data }: IPieChartBase) {
    return (
        <ResponsiveContainer
            width="100%"
            height={height ?? DEFAULT_CHART_HEIGHT}
        >
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={PIE_OUTER_RADIUS}
                    stroke="none"
                >
                    {data.map((item, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={item.color}
                        />
                    ))}
                </Pie>
                <Tooltip formatter={(value: number) => value.toFixed(TOOLTIP_DECIMALS)} />
            </PieChart>
        </ResponsiveContainer>
    );
});
