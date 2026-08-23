// Area Tag Schema

import { Schema, Types } from "mongoose";

export interface AreaTagAttributes {
  area: Types.ObjectId;
  tag: Types.ObjectId;
  name_local_language: string;
  display_order?: number;
  is_active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const AreaTagSchema = new Schema<AreaTagAttributes>(
  {
    area: {
      type: Schema.Types.ObjectId,
      ref: "Area",
      required: true,
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: "Tag",
      required: true,
    },
    name_local_language: {
      type: String,
      required: true,
      maxlength: 250,
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

export default AreaTagSchema;
