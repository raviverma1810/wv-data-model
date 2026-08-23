// Matketing Collection Schema

import { Schema, Types } from "mongoose";

export interface MarketingCollectionAttributes {
  name: string;
  name_hindi: string;
  slug: string;
  start_date: Date;
  end_date: Date;
  collection_image?: string;
  banner_image?: string;
  background_color?: string;
  text_color?: string;
  display_order?: number;
  is_active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const MarketingCollectionSchema = new Schema<MarketingCollectionAttributes>(
  {
    name: {
      type: String,
      required: true,
      maxlength: 250,
    },
    name_hindi: {
      type: String,
      required: true,
      maxlength: 250,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      maxlength: 250,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    collection_image: {
      type: String,
      maxlength: 500,
    },
    banner_image: {
      type: String,
      maxlength: 500,
    },
    background_color: {
      type: String,
      maxlength: 7,
    },
    text_color: {
      type: String,
      maxlength: 7,
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
  },
);

export default MarketingCollectionSchema;
