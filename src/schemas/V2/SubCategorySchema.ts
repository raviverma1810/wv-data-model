import { Schema, Types } from "mongoose";

export interface ISubCategoryAttributes {
  categoryId: Types.ObjectId;
  name: string;
  name_hindi?: string;
  slug: string;
  emoji?: string;
  description?: string;
  imageUrl?: string;
  image?: string;
  index?: number;
  active: boolean;
  is_global?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SubCategorySchema = new Schema<ISubCategoryAttributes>(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    name_hindi: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    slug: {
      type: String,
      index: true,
      required: true,
      trim: true,
    },
    emoji: {
      type: String,
      required: false,
      default: "",
    },
    description: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    imageUrl: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    image: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    is_global: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default SubCategorySchema;
