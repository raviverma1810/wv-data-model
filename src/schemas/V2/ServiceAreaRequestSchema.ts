import { Schema } from "mongoose";
import { PointSchema } from "./helpers";

export type AdminServiceAreaStatus = "PENDING" | "REVIEWED" | "APPROVED" | "REJECTED";

export interface IServiceAreaRequestAttributes {
  guestToken: string;
  location: {
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude]
  };
  ipAddress?: string;
  name?: string;
  mobile?: string;
  address?: string;
  adminStatus: AdminServiceAreaStatus;
  adminRemark?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceAreaRequestSchema = new Schema<IServiceAreaRequestAttributes>(
  {
    guestToken: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    location: {
      type: PointSchema,
      required: true,
    },
    ipAddress: {
      type: String,
      trim: true,
      default: "",
    },
    name: {
      type: String,
      trim: true,
      default: "",
    },
    mobile: {
      type: String,
      trim: true,
      default: "",
    },
    address: {
      type: String,
      trim: true,
      default: "",
    },
    adminStatus: {
      type: String,
      enum: ["PENDING", "REVIEWED", "APPROVED", "REJECTED"],
      default: "PENDING",
      index: true,
    },
    adminRemark: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

ServiceAreaRequestSchema.index({ location: "2dsphere" });
ServiceAreaRequestSchema.index({ guestToken: 1, createdAt: -1 });

export default ServiceAreaRequestSchema;
