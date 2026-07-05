import { Schema, Types } from "mongoose";
import OrderItem from "../models/OrderItem.js";

export interface OrderItemAttributes {
  order_id: Types.ObjectId;
  area_id: Types.ObjectId;
  product_id: Types.ObjectId;
  name: string;
  name_local_language?: string;
  base_unit_id: Types.ObjectId;
  sub_unit_id: string;
  sub_unit_name: string;
  calculation_factor: number;
  base_mrp: number;
  base_selling_price: number;
  selling_price: number;
  quantity: number;
  total_price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const OrderItemSchema = new Schema<OrderItemAttributes>(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    area_id: {
      type: Schema.Types.ObjectId,
      ref: "Area",
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    name_local_language: {
      type: String,
    },

    base_unit_id: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
    sub_unit_id: {
      type: String,
      required: true,
    },
    sub_unit_name: {
      type: String,
      required: true,
    },
    calculation_factor: {
      type: Number,
      required: true,
    },

    base_mrp: {
      type: Number,
      required: true,
    },
    base_selling_price: {
      type: Number,
      required: true,
    },
    // Based on selected subunit and base_selling_price, the selling price is calculated and stored in this field (base_selling_price * calculation_factor)
    selling_price: {
      type: Number,
      required: true,
    },
    // Quantity of the product ordered
    quantity: {
      type: Number,
      required: true,
    },
    // Total price for the product ordered (selling_price * quantity)
    total_price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Post save hook to calculate selling_price and total_price based on base_selling_price, calculation_factor, and quantity
OrderItemSchema.post("save", async function (doc) {
  const Unit = (await import("../models/Unit.js")).default as any;
  const unit = await Unit.findById(doc.base_unit_id);
  if (unit) {
    const subUnit = unit.sub_units.find((sub: any) => sub.name === doc.sub_unit_id);
    if (subUnit) {
      const sellingPrice = Math.round(doc.base_selling_price * doc.calculation_factor);
      const totalPrice = Math.round(sellingPrice * doc.quantity);
      doc.selling_price = sellingPrice;
      doc.total_price = totalPrice;
      await doc.save();
    }
  }
  // Update sub_total total and total_savings in Order collection
  const Order = (await import("../models/Order.js")).default as any;
  const order = await Order.findById(doc.order_id);
  if (order) {
    const orderItems = await OrderItem.find({ order_id: doc.order_id });
    const subTotal = orderItems.reduce((acc: number, item: any) => acc + item.total_price, 0);
    const totalSavings = orderItems.reduce(
      (acc: number, item: any) => acc + ((item.base_mrp * item.calculation_factor) - item.selling_price) * item.quantity,
      0,
    );
    order.sub_total = subTotal;
    order.total_savings = Math.round(totalSavings);
    order.total = subTotal + order.delivery_fee;
    await order.save();
  }
});

export default OrderItemSchema;
