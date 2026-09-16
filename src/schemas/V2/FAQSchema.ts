import { Schema } from "mongoose";

export interface IFAQAttributes {
  question: string;
  question_hindi?: string;
  answer: string;
  answer_hindi?: string;
  category: string;
  display_order: number;
  is_active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const FAQSchema = new Schema<IFAQAttributes>(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    question_hindi: {
      type: String,
      trim: true,
      default: "",
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
    answer_hindi: {
      type: String,
      trim: true,
      default: "",
    },
    category: {
      type: String,
      required: true,
      trim: true,
      default: "General",
      index: true,
    },
    display_order: {
      type: Number,
      default: 0,
    },
    is_active: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

FAQSchema.index({ category: 1, display_order: 1 });

export default FAQSchema;
