import { Schema, Types } from "mongoose";

export interface OrderAttributes {
  user_id: Types.ObjectId;
  city_id?: Types.ObjectId;
  pincode_id?: Types.ObjectId;
  area_id?: Types.ObjectId;
  store_id: Types.ObjectId;
  address: {
    label: string;
    address: string;
    landmark: string;
    geo_latitude: number;
    geo_longitude: number;
  };
  order_status:
    | "placed"
    | "confirmed"
    | "packed"
    | "dispatched"
    | "delivered"
    | "cancelled";
  delivery_slot?: Types.ObjectId;
  delivery_date?: Date;
  delivery_time?: string;
  delivery_status:
    | "pending"
    | "shipped"
    | "delivered"
    | "returned"
    | "cancelled";
  payment_method: "cod" | "online" | "wallet";
  payment_status: "pending" | "paid" | "failed" | "cancelled";
  payment_reference?: string;
  sub_total?: number;
  delivery_fee?: number;
  handling_fee?: number;
  total_savings?: number;
  total?: number;
  remarks?: string;
  cancelled_at?: Date;
  cancellation_reason?: string;
  receiver_name?: string;
  receiver_phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
  delivery_otp?: string;
}

const OrderSchema = new Schema<OrderAttributes>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "UserV2",
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
      ref: "StoreV2",
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
      enum: [
        "placed",
        "confirmed",
        "packed",
        "dispatched",
        "delivered",
        "cancelled",
      ],
      default: "placed",
    },
    delivery_slot: {
      type: Schema.Types.ObjectId,
      ref: "AreaDeliverySlot",
    },
    delivery_date: {
      type: Date,
    },
    delivery_time: {
      type: String,
    },
    delivery_status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "returned", "cancelled"],
      default: "pending",
    },

    payment_method: {
      type: String,
      enum: ["cod", "online", "wallet"],
    },
    payment_status: {
      type: String,
      enum: ["pending", "paid", "failed", "cancelled"],
      default: "pending",
    },
    payment_reference: {
      type: String,
    },
    sub_total: {
      type: Number,
    },
    delivery_fee: {
      type: Number,
      default: 20,
    },
    handling_fee: {
      type: Number,
      default: 2,
    },
    total_savings: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
    },
    remarks: {
      type: String,
      default: "",
    },
    cancelled_at: {
      type: Date,
    },
    cancellation_reason: {
      type: String,
      default: "",
    },
    receiver_name: {
      type: String,
      default: "",
    },
    receiver_phone: {
      type: String,
      default: "",
    },
    delivery_otp: {
      type: String,
      maxlength: 10,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default OrderSchema;
