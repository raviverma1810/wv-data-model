import { Schema, Types } from "mongoose";

export interface IStoreDeliverySlotAttributes {
  store_id?: Types.ObjectId;
  slot_name: string;
  start_time: string; // e.g. "07:00"
  end_time: string;   // e.g. "10:00"
  max_orders_per_slot?: number;
  display_order?: number;
  is_active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const StoreDeliverySlotSchema = new Schema<IStoreDeliverySlotAttributes>(
  {
    store_id: {
      type: Schema.Types.ObjectId,
      ref: "StoreV2",
      required: false,
      index: true,
    },
    slot_name: {
      type: String,
      required: true,
      trim: true,
    },
    start_time: {
      type: String,
      required: true,
      trim: true,
    },
    end_time: {
      type: String,
      required: true,
      trim: true,
    },
    max_orders_per_slot: {
      type: Number,
      default: 50,
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
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default StoreDeliverySlotSchema;
