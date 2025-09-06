import { mixed, number, object, string, type InferType } from "yup";

export const schema = object({
    unit: mixed<"standard" | "metric" | "imperial">()
        .oneOf(["standard", "metric", "imperial"], "Unit must be one of: standard, metric, imperial")
        .required("Unit is required"),
    city: string().when("$type", {
        is: "city",
        then: (schema) => schema.required("City is required"),
        otherwise: (schema) => schema.strip()
    }),
    coord: object({
        lat: number().typeError("Latitude must be a number").required("Latitude is required"),
        lon: number().typeError("Longitude must be a number").required("Longitude is required")
    }).when("$type", {
        is: "coord",
        then: (schema) => schema.required("Coordinates are required"),
        otherwise: (schema) => schema.strip()
    })
});

export type SchemaType = InferType<typeof schema>;
