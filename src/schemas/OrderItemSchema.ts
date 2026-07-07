import { Schema, Types } from "mongoose";
import OrderItem from "../models/OrderItem.js";

export interface OrderItemAttributes {
  order_id: Types.ObjectId;
  area_id: Types.ObjectId;
  store_id: Types.ObjectId;
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
    store_id: {
      type: Schema.Types.ObjectId,
      ref: "Store",
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

export default OrderItemSchema;
