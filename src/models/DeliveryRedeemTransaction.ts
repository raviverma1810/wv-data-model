// Delivery partner redeem transaction model

import mongoose, { Model } from "mongoose";

import DeliveryRedeemTransactionSchema, {
  DeliveryRedeemTransactionAttributes,
} from "../schemas/DeliveryRedeemTransaction";

export type DeliveryRedeemTransactionModel = Model<DeliveryRedeemTransactionAttributes>;

const DeliveryRedeemTransactionModel =
  (mongoose.models.DeliveryRedeemTransaction as DeliveryRedeemTransactionModel) ||
  mongoose.model<DeliveryRedeemTransactionAttributes>(
    "DeliveryRedeemTransaction",
    DeliveryRedeemTransactionSchema
  );

export default DeliveryRedeemTransactionModel;