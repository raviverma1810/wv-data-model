import { Schema, Types } from "mongoose";
import { coordinateValidator } from "./helpers";

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
  city: Types.ObjectId;
  pincode: Types.ObjectId;
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
      type: {
        type: String,
        enum: ["Point"],
        required: true,
        default: "Point",
      },
      coordinates: {
        type: [Number],
        required: true,
        validate: coordinateValidator,
      },
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
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    pincode: {
      type: Schema.Types.ObjectId,
      ref: "Pincode",
      required: true,
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
      index: true,
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

StoreSchema.index({
  adminUserId: 1,
});

export default StoreSchema;
