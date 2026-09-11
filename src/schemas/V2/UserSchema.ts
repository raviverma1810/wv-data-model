import { Schema, Types } from "mongoose";
import { PointSchema } from "./helpers";

export interface IUserAttributes {
  // Authentication
  mobile: string | null; // null for guest
  isGuest: boolean; // true initially
  isVerified: boolean; // false initially
  otp: number | null;

  // Device Tracking
  guestToken: string; // UUID generated on first app open
  deviceId?: string | null;
  deviceType: "android" | "ios" | "web" | "other";

  // Cart Mapping
  cartId: Types.ObjectId | null;

  // Location details
  currentStoreId: Types.ObjectId | null;
  lastStoreId: Types.ObjectId | null;
  lastStoreDetectedAt: Date | null;
  selectedAddressId: Types.ObjectId | null;
  currentLocation: {
    type: "Point";
    coordinates: [number, number]; // [lng, lat]
  } | null;

  // Profile information
  name: string | null;
  recentlyViewedItems: Types.ObjectId[];

  // Push Notifications
  fcmTokens: string[];

  // Metadata
  lastActiveAt: Date | null;
  registeredAt: Date | null;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUserAttributes>(
  {
    mobile: {
      type: String,
    },


    isGuest: {
      type: Boolean,
      default: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    otp: {
      type: Number,
      default: null,
    },

    guestToken: {
      type: String,
      required: true,
      unique: true,
    },

    deviceId: {
      type: String,
      default: null,
    },

    deviceType: {
      type: String,
      enum: ["android", "ios", "web", "other"],
      required: true,
    },

    cartId: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
      default: null,
    },

    currentStoreId: {
      type: Schema.Types.ObjectId,
      ref: "Store",
      default: null,
    },

    lastStoreId: {
      type: Schema.Types.ObjectId,
      ref: "Store",
      default: null,
    },

    lastStoreDetectedAt: {
      type: Date,
      default: null,
    },

    selectedAddressId: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      default: null,
    },

    currentLocation: {
      type: PointSchema,
      default: null,
    },

    name: {
      type: String,
      trim: true,
      default: null,
    },

    recentlyViewedItems: {
      type: [Schema.Types.ObjectId],
      ref: "Product",
      default: [],
    },

    fcmTokens: {
      type: [String],
      default: [],
    },

    lastActiveAt: {
      type: Date,
      default: Date.now,
    },

    registeredAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

// Geo Index
UserSchema.index({
  currentLocation: "2dsphere",
});

// Mobile Login Index
UserSchema.index(
  { mobile: 1 },
  {
    unique: true,
    partialFilterExpression: { mobile: { $type: "string" } },
  },
);


UserSchema.index({
  currentStoreId: 1,
});

export default UserSchema;
