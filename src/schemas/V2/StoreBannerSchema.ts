import { Schema, Types } from "mongoose";

export interface IStoreBannerAttributes {
  store_id?: Types.ObjectId;
  name: string;
  name_hindi?: string;
  banner_image: string;
  redirect_url?: string;
  target_slug?: string;
  background_color?: string;
  text_color?: string;
  display_order?: number;
  is_active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const StoreBannerSchema = new Schema<IStoreBannerAttributes>(
  {
    store_id: {
      type: Schema.Types.ObjectId,
      ref: "StoreV2",
      required: false,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    name_hindi: {
      type: String,
      trim: true,
      default: "",
    },
    banner_image: {
      type: String,
      required: true,
      trim: true,
    },
    redirect_url: {
      type: String,
      trim: true,
      default: "",
    },
    target_slug: {
      type: String,
      trim: true,
      default: "",
    },
    background_color: {
      type: String,
      trim: true,
      default: "",
    },
    text_color: {
      type: String,
      trim: true,
      default: "",
    },
    display_order: {
      type: Number,
      default: 0,
    },
    is_active: {
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

export default StoreBannerSchema;
