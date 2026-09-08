import { Schema, Types } from "mongoose";

export interface StoreAttributes {
  name: string;
  name_local_language?: string;
  name_hindi: string;
  city: Types.ObjectId;
  address: string;
  geo_latitude?: number;
  geo_longitude?: number;
  phone: string;
  owner_name: string;
  owner_email: string;
  owner_phone: string;
  admin_approved?: boolean;
  userid?: string;
  password?: string;
  delivery_radius?: number;
  status?: boolean;
  likes?: number;
  dislikes?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const StoreSchema = new Schema<StoreAttributes>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 250,
    },
    name_local_language: {
      type: String,
      maxlength: 250,
    },
    name_hindi: {
      type: String,
      required: true,
      maxlength: 250,
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    address: {
      type: String,
      required: true,
      maxlength: 500,
    },
    geo_latitude: {
      type: Number,
      default: 0,
    },
    geo_longitude: {
      type: Number,
      default: 0,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      maxlength: 15,
    },
    owner_name: {
      type: String,
      required: true,
      maxlength: 250,
    },
    owner_email: {
      type: String,
      required: true,
      maxlength: 100,
    },
    owner_phone: {
      type: String,
      required: true,
      maxlength: 15,
    },
    admin_approved: {
      type: Boolean,
      default: false,
    },
    userid: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    delivery_radius: {
      type: Number,
      default: 3,
      min: 1,
      max: 2,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default StoreSchema;
