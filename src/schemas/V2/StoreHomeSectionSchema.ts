import { Schema, Types } from "mongoose";

export type StoreHomeSectionType = "category" | "banner" | "collection" | "tag";

export interface IStoreHomeSectionAttributes {
  store_id?: Types.ObjectId;
  section_name: string;
  section_type: StoreHomeSectionType;
  ref_id?: Types.ObjectId;
  section_order: number;
  see_more?: boolean;
  redirect_url?: string;
  is_active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const StoreHomeSectionSchema = new Schema<IStoreHomeSectionAttributes>(
  {
    store_id: {
      type: Schema.Types.ObjectId,
      ref: "StoreV2",
      required: false,
      index: true,
    },
    section_name: {
      type: String,
      required: true,
      trim: true,
    },
    section_type: {
      type: String,
      enum: ["category", "banner", "collection", "tag"],
      required: true,
    },
    ref_id: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    see_more: {
      type: Boolean,
      default: false,
    },
    section_order: {
      type: Number,
      default: 0,
    },
    redirect_url: {
      type: String,
      trim: true,
      default: "",
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

export default StoreHomeSectionSchema;
