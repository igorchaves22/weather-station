import { memo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import type { IChart } from "./types";
import { useController } from "./useController";

export const PieChartWithPointer = memo(function PieChartWhitePointer({ height, value, data }: IChart) {
    const { containerReference, content } = useController({ height, value, data });

    return (
        <ResponsiveContainer
            width="100%"
            height={content.heightValue}
            ref={containerReference}
        >
            <PieChart>
                <Pie
                    dataKey="value"
                    data={data}
                    cx="50%"
                    cy="75%"
                    stroke="none"
                    {...content.pie}
                >
                    {data.map((item) => (
                        <Cell
                            key={`cell-${item.name}`}
                            fill={item.color}
                        />
                    ))}
                    <line
                        stroke="var(--color-brand)"
                        strokeWidth={4}
                        strokeLinecap="round"
                        {...content.line}
                    />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
});
