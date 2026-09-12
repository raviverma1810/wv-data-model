import { Schema, Types } from "mongoose";
import { PointSchema } from "./helpers";

export interface IStoreAttributes {
  name: string;
  active: boolean;

  // Location details
  label: string;
  location: {
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude]
  };
  addressLine1: string;
  addressLine2?: string;
  city?: string | Types.ObjectId | null;
  pincode?: string | Types.ObjectId | null;
  deliveryRadiusKm: number;

  // Contact details
  phone?: string | null;
  ownerName?: string | null;
  ownerEmail?: string | null;
  ownerMobile?: string | null;
  managerName?: string | null;
  managerEmail?: string | null;
  managerMobile?: string | null;

  // Store Admin Login Details
  adminUserId: string;
  adminPassword: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

const StoreSchema = new Schema<IStoreAttributes>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      required: true,
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
      type: Schema.Types.Mixed,
      required: false,
    },
    pincode: {
      type: Schema.Types.Mixed,
      required: false,
    },
    deliveryRadiusKm: {
      type: Number,
      required: true,
      default: 3,
      min: 1,
      max: 20,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    ownerName: {
      type: String,
      trim: true,
      default: "",
    },
    ownerEmail: {
      type: String,
      trim: true,
      default: "",
    },
    ownerMobile: {
      type: String,
      trim: true,
      default: "",
    },
    managerName: {
      type: String,
      trim: true,
      default: "",
    },
    managerEmail: {
      type: String,
      trim: true,
      default: "",
    },
    managerMobile: {
      type: String,
      trim: true,
      default: "",
    },
    adminUserId: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    adminPassword: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

StoreSchema.index({
  location: "2dsphere",
});

export default StoreSchema;
