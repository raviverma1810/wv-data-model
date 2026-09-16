import { Schema } from "mongoose";

export interface IAppConfigAttributes {
  key: string;
  appName: string;
  version: string;
  min_supported_version?: string;
  force_update?: boolean;
  orderCutoff: {
    cutoffHour: number;
    cutoffMinute: number;
    cutoffLabel?: string;
    cutoffMessage?: string;
    nextWindowOpenTime?: string;
    warningMinutesBefore?: number;
  };
  openingTime: {
    openingHour: number;
    openingMinute: number;
    openingLabel?: string;
  };
  delivery: {
    standardDeliveryFee: number;
    freeDeliveryThreshold: number;
    handlingFee: number;
    estimatedDeliveryMinutes: number;
    minOrderAmount: number;
    standardDeliveryTime?: string;
    deliverySlotStart?: string;
    deliverySlotEnd?: string;
  };
  support: {
    email: string;
    phone: string;
    whatsapp: string;
    hours: string;
  };
  maintenanceMode: {
    isActive: boolean;
    message: string;
  };
  serviceGuarantee: Array<{
    title: string;
    desc: string;
  }>;
  createdAt?: Date;
  updatedAt?: Date;
}

const AppConfigSchema = new Schema<IAppConfigAttributes>(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      default: "global",
      index: true,
    },
    appName: {
      type: String,
      default: "WhatsVeg",
    },
    version: {
      type: String,
      default: "2.0.0",
    },
    min_supported_version: {
      type: String,
      default: "1.0.0",
    },
    force_update: {
      type: Boolean,
      default: false,
    },
    orderCutoff: {
      cutoffHour: { type: Number, default: 23 },
      cutoffMinute: { type: Number, default: 0 },
      cutoffLabel: { type: String, default: "11:00 PM" },
      cutoffMessage: {
        type: String,
        default:
          "We are closed for today, next order window will open at 7:00 AM tomorrow",
      },
      nextWindowOpenTime: { type: String, default: "7:00 AM" },
      warningMinutesBefore: { type: Number, default: 120 },
    },
    openingTime: {
      openingHour: { type: Number, default: 7 },
      openingMinute: { type: Number, default: 0 },
      openingLabel: { type: String, default: "7:00 AM" },
    },
    delivery: {
      standardDeliveryFee: { type: Number, default: 20 },
      freeDeliveryThreshold: { type: Number, default: 199 },
      handlingFee: { type: Number, default: 5 },
      estimatedDeliveryMinutes: { type: Number, default: 10 },
      minOrderAmount: { type: Number, default: 0 },
      standardDeliveryTime: { type: String, default: "7:00 AM – 11:00 AM" },
      deliverySlotStart: { type: String, default: "07:00 AM" },
      deliverySlotEnd: { type: String, default: "11:00 AM" },
    },
    support: {
      email: { type: String, default: "hello@whatsveg.in" },
      phone: { type: String, default: "+918319439884" },
      whatsapp: { type: String, default: "+918319439884" },
      hours: { type: String, default: "6:00 AM - 11:00 PM (Everyday)" },
    },
    maintenanceMode: {
      isActive: { type: Boolean, default: false },
      message: {
        type: String,
        default: "We are currently under maintenance. We will be back shortly!",
      },
    },
    serviceGuarantee: [
      {
        title: { type: String, required: true },
        desc: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default AppConfigSchema;
