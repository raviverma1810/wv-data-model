import { Schema, Types } from "mongoose";

export type UserRole = "user" | "admin" | "superadmin";

export interface UserAttributes {
  name: string;
  email: string;
  emailVerified?: boolean;
  mobile?: string;
  alternateMobile?: string;
  mobileVerified?: boolean;
  password: string;
  role?: UserRole;
  addressLabel?: string;
  address?: string;
  landmark?: string;
  geo_latitude?: number;
  geo_longitude?: number;
  city: Types.ObjectId;
  pincode: Types.ObjectId;
  area: Types.ObjectId;
  recentlyViewedProducts?: Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<UserAttributes>(
  {
    name: {
      type: String,
      required: true,
      maxlength: 250
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100
    },
    emailVerified: {
      type: Boolean,
      default: false
    },
    mobile: {
      type: String,
      maxlength: 15
    },
    alternateMobile: {
      type: String,
      maxlength: 15
    },
    mobileVerified: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: true,
      maxlength: 100
    },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user"
    },
    addressLabel: {
      type: String,
      maxlength: 100
    },
    address: {
      type: String,
      maxlength: 500
    },
    landmark: {
      type: String,
      maxlength: 250
    },
    geo_latitude: {
      type: Number
    },
    geo_longitude: {
      type: Number
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true
    },
    pincode: {
      type: Schema.Types.ObjectId,
      ref: "Pincode",
      required: true
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: "Area",
      required: true
    },
    recentlyViewedProducts: {
      type: [Schema.Types.ObjectId],
      ref: "Product"
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

export default UserSchema;