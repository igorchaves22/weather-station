export interface IPieChartBase {
    height?: number;
    data: {
        name: string;
        value: number;
        color: string;
    }[];
}
