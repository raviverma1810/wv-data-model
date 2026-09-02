// Tags Schema

import { Schema } from "mongoose";

export interface TagsAttributes {
  name: string;
  name_hindi: string;
  slug?: string;
  image_url: string;
  background_color?: string;
  background_image_url?: string;
  is_active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const TagsSchema = new Schema<TagsAttributes>(
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
      maxlength: 250,
    },
    image_url: {
      type: String,
      required: true,
      maxlength: 500,
    },
    background_color: {
      type: String,
      maxlength: 250,
    },
    background_image_url: {
      type: String,
      maxlength: 500,
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

export default TagsSchema;
