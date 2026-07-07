// Delivery partner earning points schema
import { Schema, Types } from "mongoose";

export interface DeliveryEarningPointsAttributes {
  store_id: Types.ObjectId;
  delivery_partner: Types.ObjectId;
  total_deliveries: number;
  total_earned_points: number;
  total_redeemed_points: number;
  total_available_points: number;
  status?: boolean;
  closed: boolean;
  closedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const DeliveryEarningPointsSchema = new Schema<DeliveryEarningPointsAttributes>(
  {
    store_id: {
      type: Schema.Types.ObjectId,
      ref: "Store",
      required: true,
    },
    delivery_partner: {
      type: Schema.Types.ObjectId,
      ref: "DeliveryPartner",
      required: true,
    },
    total_deliveries: {
      type: Number,
      default: 0,
    },
    total_earned_points: {
      type: Number,
      default: 0,
    },
    total_redeemed_points: {
      type: Number,
      default: 0,
    },
    total_available_points: {
      type: Number,
      default: 0,
    },
    status: {
      type: Boolean,
      default: true,
    },
    closed: {
      type: Boolean,
      default: false,
    },
    closedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export default DeliveryEarningPointsSchema;
