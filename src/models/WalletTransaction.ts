// WalletTransaction model

import mongoose, { Model } from "mongoose";

import WalletTransactionSchema, { WalletTransactionAttributes } from "../schemas/WalletTransactionSchema";

export type WalletTransactionModel = Model<WalletTransactionAttributes>;

const WalletTransaction = (mongoose.models.WalletTransaction as WalletTransactionModel) || mongoose.model<WalletTransactionAttributes>("WalletTransaction", WalletTransactionSchema);

export default WalletTransaction;