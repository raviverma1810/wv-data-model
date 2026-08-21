import { Schema, Types } from "mongoose";

export interface MetaDataAttributes {
  store: Types.ObjectId;
  morning_delivery_window: string;
  evening_delivery_window: string;
  delivery_fee: number;
  handling_fee: number;
  min_order_amount: number;
  admin_approved?: boolean;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const MetaDataSchema = new Schema<MetaDataAttributes>(
  {
    store: {
      type: Schema.Types.ObjectId,
      ref: "Store",
    },
    morning_delivery_window: {
      type: String,
      required: true,
      default: "8:00 AM - 11:00 AM",
    },
    evening_delivery_window: {
      type: String,
      required: true,
      default: "06:00 PM - 09:00 PM",
    },
    delivery_fee: {
      type: Number,
      required: true,
      default: 20,
    },
    handling_fee: {
      type: Number,
      required: true,
      default: 5,
    },
    min_order_amount: {
      type: Number,
      required: true,
      default: 100,
    },
    admin_approved: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default MetaDataSchema;
