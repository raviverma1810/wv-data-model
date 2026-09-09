import { Schema, Types } from "mongoose";
import { PointSchema } from "./helpers";

export interface IAddressAttributes {
  // User details
  userId: Types.ObjectId;

  // Address and location details
  label: string;
  location: {
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude]
  };
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

const AddressSchema = new Schema<IAddressAttributes>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    label: {
      type: String,
      required: true, // Home, Work, Other
      trim: true,
    },

    location: {
      type: PointSchema,
      required: true,
    },

    addressLine1: {
      type: String,
      required: true,
      trim: true,
    },

    addressLine2: {
      type: String,
      trim: true,
      default: "",
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    pincode: {
      type: String,
      required: true,
      trim: true,
    },

    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

AddressSchema.index({ location: "2dsphere" });

export default AddressSchema;
