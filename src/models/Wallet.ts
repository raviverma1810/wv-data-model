// Wallet model

import mongoose, { Model } from "mongoose";

import WalletSchema, { WalletAttributes } from "../schemas/WalletSchema";

export type WalletModel = Model<WalletAttributes>;

const Wallet = (mongoose.models.Wallet as WalletModel) || mongoose.model<WalletAttributes>("Wallet", WalletSchema);

export default Wallet;