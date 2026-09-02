// Order and delivery partner mapping schema

import { Schema, Types } from "mongoose";

export interface OrderDeliveryPartnerAttributes {
  order: Types.ObjectId;
  delivery_partner: Types.ObjectId;

  assigned_at?: Date;
  assigned_by?: Types.ObjectId; // store

  returned_at?: Date;
  picked_up_at?: Date;
  delivered_at?: Date;
  cancelled_at?: Date;
  remarks?: string;
  delivery_latitude?: number;
  delivery_longitude?: number;
  delivery_otp_verified?: boolean;
  status:
    | "assigned"
    | "accepted"
    | "rejected"
    | "picked"
    | "delivery_in_progress"
    | "delivered"
    | "delivery_failed"
    | "returned_by_customer"
    | "returned_by_partner"
    | "dropped_back_to_store"
    | "cancelled";
  order_pre_paid?: boolean;
  cod_payment_method?: "cash" | "upi" | "other";
  cod_collected?: boolean;
  cod_collected_at?: Date;
  cod_collected_amount?: number;
  cod_collection_reference?: string;
  cod_collection_remark?: string;

  cash_deposit_mode?: "cash" | "upi" | "other";
  cash_deposited?: boolean;
  cash_deposited_at?: Date;
  cash_deposited_amount?: number;
  cash_deposit_reference?: string;
  cash_deposit_remark?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

const OrderDeliveryPartnerSchema = new Schema<OrderDeliveryPartnerAttributes>(
  {
    order: { type: Types.ObjectId, ref: "Order", required: true },
    delivery_partner: {
      type: Types.ObjectId,
      ref: "DeliveryPartner",
      required: true,
    },

    assigned_at: { type: Date },
    assigned_by: { type: Types.ObjectId, ref: "Store" },

    returned_at: { type: Date },
    picked_up_at: { type: Date },
    delivered_at: { type: Date },
    cancelled_at: { type: Date },
    remarks: { type: String },
    delivery_latitude: { type: Number },
    delivery_longitude: { type: Number },
    delivery_otp_verified: { type: Boolean },
    status: {
      type: String,
      enum: [
        "assigned",
        "accepted",
        "rejected",
        "picked",
        "delivery_in_progress",
        "delivered",
        "delivery_failed",
        "returned_by_customer",
        "returned_by_partner",
        "dropped_back_to_store",
        "cancelled",
      ],
      required: true,
    },
    order_pre_paid: { type: Boolean },
    cod_payment_method: { type: String, enum: ["cash", "upi", "other"] },
    cod_collected: { type: Boolean },
    cod_collected_at: { type: Date },
    cod_collected_amount: { type: Number },
    cod_collection_reference: { type: String },
    cod_collection_remark: { type: String },

    cash_deposit_mode: { type: String, enum: ["cash", "upi", "other"] },
    cash_deposited: { type: Boolean },
    cash_deposited_at: { type: Date },
    cash_deposited_amount: { type: Number },
    cash_deposit_reference: { type: String },
    cash_deposit_remark: { type: String },
  },
  { timestamps: true },
);

export default OrderDeliveryPartnerSchema;
