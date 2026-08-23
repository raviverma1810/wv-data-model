// Banners schema

import { Schema, Types } from "mongoose";

export interface AreaBannerAttributes {
  area_id: Types.ObjectId;
  name: string;
  name_hindi: string;
  banner_image: string;
  redirect_url: string;
  background_color?: string;
  text_color?: string;
  display_order?: number;
  is_active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const AreaBannerSchema = new Schema<AreaBannerAttributes>(
  {
    area_id: { type: Types.ObjectId, ref: "Area", required: true },
    name: { type: String, required: true },
    name_hindi: { type: String, required: true },
    banner_image: { type: String, required: true },
    redirect_url: { type: String, required: true },
    background_color: { type: String },
    text_color: { type: String },
    display_order: { type: Number },
    is_active: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export default AreaBannerSchema;
