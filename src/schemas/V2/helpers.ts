import { Schema } from "mongoose";

export const coordinateValidator = {
  validator: function (value: number[]) {
    if (!Array.isArray(value) || value.length !== 2) {
      return false;
    }

    const [longitude, latitude] = value;

    if (
      longitude < -180 ||
      longitude > 180 ||
      latitude < -90 ||
      latitude > 90
    ) {
      return false;
    }

    return true;
  },
  message:
    "Coordinates must be [longitude, latitude] and within valid geographic ranges",
};

export const PointSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      validate: coordinateValidator,
    },
  },
  { _id: false },
);

