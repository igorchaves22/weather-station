export interface IChart {
    height?: number;
    value: number;
    data: {
        name: string;
        value: number;
        color: string;
    }[];
}
