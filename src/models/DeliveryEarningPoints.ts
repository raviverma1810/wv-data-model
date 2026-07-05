// Delivery earning points model
import mongoose, { Model } from "mongoose";

import DeliveryEarningPointsSchema, { DeliveryEarningPointsAttributes } from "../schemas/DeliveryEarningPoints";

export type DeliveryEarningPointsModel = Model<DeliveryEarningPointsAttributes>;

const DeliveryEarningPointsModel =
  (mongoose.models.DeliveryEarningPoints as DeliveryEarningPointsModel) ||
  mongoose.model<DeliveryEarningPointsAttributes>("DeliveryEarningPoints", DeliveryEarningPointsSchema);

export default DeliveryEarningPointsModel;