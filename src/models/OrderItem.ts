import mongoose, { Model } from "mongoose";

import OrderItemSchema, { OrderItemAttributes } from "../schemas/OrderItemSchema";

export type OrderItemModel = Model<OrderItemAttributes>;

const OrderItem = (mongoose.models.OrderItem as OrderItemModel) || mongoose.model<OrderItemAttributes>("OrderItem", OrderItemSchema);

export default OrderItem;