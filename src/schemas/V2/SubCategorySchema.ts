import { Schema, Types } from "mongoose";

export interface ISubCategoryAttributes {
  categoryId: Schema.Types.ObjectId;
  name: string;
  name_hindi: string;
  slug: string;
  description: string;
  active: boolean;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const SubCategorySchema = new Schema<ISubCategoryAttributes>(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    name_hindi: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      index: true,
      unique: true,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default SubCategorySchema;
