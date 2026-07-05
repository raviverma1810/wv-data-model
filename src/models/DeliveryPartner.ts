// Delivery partner model
import mongoose, { Model } from "mongoose";

import DeliveryPartnerSchema, { DeliveryPartnerAttributes } from "../schemas/DeliveryPartner";

export type DeliveryPartnerModel = Model<DeliveryPartnerAttributes>;

const DeliveryPartnerModel =
  (mongoose.models.DeliveryPartner as DeliveryPartnerModel) ||
  mongoose.model<DeliveryPartnerAttributes>("DeliveryPartner", DeliveryPartnerSchema);

export default DeliveryPartnerModel;
