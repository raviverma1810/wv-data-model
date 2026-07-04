import { Schema, Types } from "mongoose";

export interface StoreAttributes {
  name: string;
  name_local_language?: string;
  name_hindi: string;
  city: Types.ObjectId;
  address: string;
  phone: string;
  owner_name: string;
  owner_email: string;
  owner_phone: string;
  admin_approved?: boolean;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const StoreSchema = new Schema<StoreAttributes>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 250
    },
    name_local_language: {
      type: String,
      maxlength: 250
    },
    name_hindi: {
      type: String,
      required: true,
      maxlength: 250
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true
    },
    address: {
      type: String,
      required: true,
      maxlength: 500
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      maxlength: 15
    },
    owner_name: {
      type: String,
      required: true,
      maxlength: 250
    },
    owner_email: {
      type: String,
      required: true,
      maxlength: 100
    },
    owner_phone: {
      type: String,
      required: true,
      maxlength: 15
    },
    admin_approved: {
      type: Boolean,
      default: false
    },
    status: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

export default StoreSchema;