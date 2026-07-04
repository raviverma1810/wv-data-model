import { Schema } from "mongoose";

export interface CityAttributes {
  name: string;
  name_hindi: string;
  state: string;
  country: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const CitySchema = new Schema<CityAttributes>(
  {
    name: {
      type: String,
      required: true,
      maxlength: 250
    },
    name_hindi: {
      type: String,
      required: true,
      maxlength: 250
    },
    state: {
      type: String,
      required: true,
      maxlength: 250
    },
    country: {
      type: String,
      required: true,
      maxlength: 250
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

export default CitySchema;