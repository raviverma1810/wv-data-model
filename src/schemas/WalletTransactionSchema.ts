// wallet transaction schema for users

import { Schema } from "mongoose";

export interface WalletTransactionAttributes {
  user_id: Schema.Types.ObjectId;
  wallet_id: Schema.Types.ObjectId;
  transaction_type: "credit" | "debit";
  amount: number;
  label: string;
  title: string;
  remarks?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const WalletTransactionSchema = new Schema<WalletTransactionAttributes>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "UserV2",
      required: true,
    },
    wallet_id: {
      type: Schema.Types.ObjectId,
      ref: "Wallet",
      required: true,
    },
    transaction_type: {
      type: String,
      enum: ["credit", "debit"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default WalletTransactionSchema;
