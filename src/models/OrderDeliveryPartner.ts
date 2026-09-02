// order delivery partner model

import mongoose, { Model } from "mongoose";

import OrderDeliveryPartnerSchema, {
  OrderDeliveryPartnerAttributes,
} from "../schemas/OrderDeliveryPartnerSchema";

export type OrderDeliveryPartnerModel = Model<OrderDeliveryPartnerAttributes>;

const OrderDeliveryPartner =
  (mongoose.models.OrderDeliveryPartner as OrderDeliveryPartnerModel) ||
  mongoose.model<OrderDeliveryPartnerAttributes>(
    "OrderDeliveryPartner",
    OrderDeliveryPartnerSchema,
  );

export default OrderDeliveryPartner;
