import { Schema } from "mongoose";

export interface CategoryAttributes {
  name: string;
  name_hindi: string;
  emoji?: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  status?: boolean;
  is_global?: boolean;
  index?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const CategorySchema = new Schema<CategoryAttributes>(
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
    emoji: {
      type: String,
      maxlength: 5,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      maxlength: 250,
    },
    description: {
      type: String,
      maxlength: 2000,
    },
    imageUrl: {
      type: String,
      maxlength: 500,
    },
    status: {
      type: Boolean,
      default: true,
    },
    is_global: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default CategorySchema;
