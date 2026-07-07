import { Schema, Types } from "mongoose";

  export interface OrderAttributes {
    user_id: Types.ObjectId;
    city_id: Types.ObjectId;
    pincode_id: Types.ObjectId;
    area_id: Types.ObjectId;
    store_id: Types.ObjectId;
    address: {
      label: string;
      address: string;
      landmark: string;
      geo_latitude: number;
      geo_longitude: number;
    };
    order_status: "placed" | "packed" | "dispatched" | "delivered" | "cancelled";
    delivery_date?: Date;
    delivery_time?: string;
    delivery_status: "pending" | "shipped" | "delivered" | "cancelled";
    payment_method: "cod" | "online";
    payment_status: "pending" | "paid" | "failed";
    sub_total?: number;
    delivery_fee?: number;
    total_savings?: number;
    total?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }

const OrderSchema = new Schema<OrderAttributes>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    city_id: {
      type: Schema.Types.ObjectId,
      ref: "City",
    },
    pincode_id: {
      type: Schema.Types.ObjectId,
      ref: "Pincode",
    },
    area_id: {
      type: Schema.Types.ObjectId,
      ref: "Area",
    },
    store_id: {
      type: Schema.Types.ObjectId,
      ref: "Store",
    },
    address: {
      label: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      landmark: {
        type: String,
        required: true,
      },
      geo_latitude: {
        type: Number,
        required: true,
      },
      geo_longitude: {
        type: Number,
        required: true,
      },
    },
    order_status: {
      type: String,
      enum: ["placed", "packed", "dispatched", "delivered", "cancelled"],
      default: "placed",
    },
    delivery_date: {
      type: Date,
    },
    delivery_time: {
      type: String,
    },
    delivery_status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },

    payment_method: {
      type: String,
      enum: ["cod", "online"],
    },
    payment_status: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    sub_total: {
      type: Number,
    },
    delivery_fee: {
      type: Number,
      default: 20,
    },
    total_savings: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default OrderSchema;
