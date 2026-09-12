// wallet schema for users

import { Schema } from "mongoose";

export interface WalletAttributes {
  user_id: Schema.Types.ObjectId;
  balance: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const WalletSchema = new Schema<WalletAttributes>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "UserV2",
      required: true,
      unique: true,
      index: true,
    },
    balance: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export default WalletSchema;
