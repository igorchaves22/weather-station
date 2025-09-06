import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    ANGLE_OFFSET,
    CY_HEIGHT_FACTOR,
    DEFAULT_CHART_HEIGHT,
    DIVIDE_BY_TWO,
    FULL_ANGLE,
    INDEX_OFFSET,
    INITIAL_CONTAINER_REFERENCE,
    INITIAL_CONTAINER_WIDTH,
    PI,
    PIE_END_ANGLE,
    PIE_INNER_RADIUS,
    PIE_OUTER_RADIUS,
    PIE_START_ANGLE
} from "./constants";
import type { IChart } from "./types";

export const useController = ({ height, value, data }: IChart) => {
    const containerReference = useRef<HTMLDivElement>(INITIAL_CONTAINER_REFERENCE);
    const [containerWidth, setContainerWidth] = useState(INITIAL_CONTAINER_WIDTH);

    const updateContainerWidth = useCallback(() => {
        if (containerReference.current) setContainerWidth(containerReference.current.offsetWidth);
    }, []);
    const content = useMemo(() => {
        const heightValue = height ?? DEFAULT_CHART_HEIGHT;
        const pie = {
            startAngle: PIE_START_ANGLE,
            endAngle: PIE_END_ANGLE,
            innerRadius: PIE_INNER_RADIUS,
            outerRadius: PIE_OUTER_RADIUS
        };
        const centerX = containerWidth / DIVIDE_BY_TWO;
        const centerY = heightValue * CY_HEIGHT_FACTOR;
        const totalSectors = data.length;
        const selectedIndex = value - INDEX_OFFSET;
        const angleForSelectedSector = (FULL_ANGLE / totalSectors) * (selectedIndex + ANGLE_OFFSET);
        const averageRadius = (PIE_INNER_RADIUS + PIE_OUTER_RADIUS) / DIVIDE_BY_TWO;
        const angleInRadian = angleForSelectedSector * (PI / FULL_ANGLE);
        const lineEndX = centerX + averageRadius * Math.cos(PI - angleInRadian);
        const lineEndY = centerY - averageRadius * Math.sin(PI - angleInRadian);
        const line = {
            x1: centerX,
            y1: centerY,
            x2: lineEndX,
            y2: lineEndY
        };

        return { heightValue, pie, line };
    }, [containerWidth, data.length, height, value]);

    useEffect(() => {
        updateContainerWidth();

        window.addEventListener("resize", updateContainerWidth);

        return () => window.removeEventListener("resize", updateContainerWidth);
    }, [updateContainerWidth]);

    return { containerReference, content };
};
