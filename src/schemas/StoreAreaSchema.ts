import { Schema, Types } from "mongoose";

export interface StoreAreaAttributes {
  store: Types.ObjectId;
  area: Types.ObjectId;
  admin_approved?: boolean;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const StoreAreaSchema = new Schema<StoreAreaAttributes>(
  {
    store: {
      type: Schema.Types.ObjectId,
      ref: "Store",
      required: true
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: "Area",
      required: true
    },
    admin_approved: {
      type: Boolean,
      default: false
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default StoreAreaSchema;