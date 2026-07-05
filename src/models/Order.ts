import mongoose, { Model } from "mongoose";

import OrderSchema, { OrderAttributes } from "../schemas/OrderSchema";

export type OrderModel = Model<OrderAttributes>;

const Order = (mongoose.models.Order as OrderModel) || mongoose.model<OrderAttributes>("Order", OrderSchema);

export default Order;