// Delivery partner points redeem transaction schema
import { Schema, Types } from "mongoose";

export interface DeliveryRedeemTransactionAttributes {
  store_id: Types.ObjectId;
  delivery_partner: Types.ObjectId;
  points_redeemed: number;
  transaction_date: Date;
  transaction_status: "pending" | "in_progress" | "approved" | "rejected";
  points_before_transaction: number;
  points_after_transaction: number;
  payment_reference_id?: string;
  payment_mode?: "bank_transfer" | "upi";
  payment_date?: Date;
  paid_amount?: number;
  payment_status?: "pending" | "in_progress" | "success" | "failed";
  remarks?: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const DeliveryRedeemTransactionSchema =
  new Schema<DeliveryRedeemTransactionAttributes>(
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
      points_redeemed: {
        type: Number,
        required: true,
      },
      transaction_date: {
        type: Date,
        required: true,
      },
      transaction_status: {
        type: String,
        enum: ["pending", "in_progress", "approved", "rejected"],
        required: true,
      },
      points_before_transaction: {
        type: Number,
        required: true,
      },
      points_after_transaction: {
        type: Number,
        required: true,
      },
      payment_reference_id: {
        type: String,
        maxlength: 100,
      },
      payment_mode: {
        type: String,
        enum: ["bank_transfer", "upi"],
      },
      payment_date: {
        type: Date,
      },
      paid_amount: {
        type: Number,
      },
      payment_status: {
        type: String,
        enum: ["pending", "in_progress", "success", "failed"],
      },
      remarks: {
        type: String,
        maxlength: 500,
      },
      status: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    },
  );

export default DeliveryRedeemTransactionSchema;
