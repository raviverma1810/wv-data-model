// Area home page section schema
import { Schema, Types } from "mongoose";

export enum AreaHomeSectionType {
  TAG = "tag",
  BANNER = "banner",
  CATEGORY = "category",
  COLLECTION = "collection",
}

export interface AreaHomeSectionAttributes {
  area_id: Types.ObjectId;
  section_name: string;
  section_type: AreaHomeSectionType;
  tag_ref_id?: Types.ObjectId;
  banner_ref_id?: Types.ObjectId;
  category_ref_id?: Types.ObjectId;
  collection_ref_id?: Types.ObjectId;
  section_order: number;
  see_more?: boolean;
  redirect_url?: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const AreaHomeSectionSchema = new Schema<AreaHomeSectionAttributes>(
  {
    area_id: { type: Types.ObjectId, required: true },
    section_name: { type: String, required: true },
    section_type: {
      type: String,
      enum: Object.values(AreaHomeSectionType),
      required: true,
    },
    tag_ref_id: { type: Types.ObjectId, ref: "Tags", required: false },
    banner_ref_id: { type: Types.ObjectId, ref: "Banners", required: false },
    category_ref_id: {
      type: Types.ObjectId,
      ref: "Categories",
      required: false,
    },
    collection_ref_id: {
      type: Types.ObjectId,
      ref: "MarketingCollections",
      required: false,
    },
    see_more: { type: Boolean, default: false },
    section_order: { type: Number, required: true },
    redirect_url: { type: String, required: false },
    status: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default AreaHomeSectionSchema;
