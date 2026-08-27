// delivery slot schema

import { Schema } from "mongoose";

export interface AreaDeliverySlotAttributes {
  area_id: Schema.Types.ObjectId;
  delivery_slot: string;
  is_active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const AreaDeliverySlotSchema = new Schema<AreaDeliverySlotAttributes>(
  {
    area_id: {
      type: Schema.Types.ObjectId,
      ref: "Area",
      required: true,
    },
    delivery_slot: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default AreaDeliverySlotSchema;
