import { Schema } from "mongoose";
import { PointSchema } from "./helpers";

export type FranchiseInquiryStatus =
  | "NEW"
  | "CONTACTED"
  | "UNDER_REVIEW"
  | "APPROVED"
  | "REJECTED";

export type CommercialSpaceStatus =
  | "OWNED"
  | "RENTED"
  | "LOOKING_TO_LEASE"
  | "NONE";

export interface IFranchiseInquiryAttributes {
  guestToken: string;
  name: string;
  mobile: string;
  email?: string;
  city: string;
  area: string;
  pincode?: string;
  location: {
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude]
  };
  spaceStatus: CommercialSpaceStatus;
  approxAreaSqFt?: string | number;
  investmentBudget?: string;
  timeline?: string;
  experience?: string;
  remarks?: string;
  ipAddress?: string;
  status: FranchiseInquiryStatus;
  adminRemarks?: string;
  createdAt: Date;
  updatedAt: Date;
}

const FranchiseInquirySchema = new Schema<IFranchiseInquiryAttributes>(
  {
    guestToken: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },
    city: {
      type: String,
      required: true,
      trim: true,
      default: "Indore",
    },
    area: {
      type: String,
      required: true,
      trim: true,
    },
    pincode: {
      type: String,
      trim: true,
      default: "",
    },
    location: {
      type: PointSchema,
      required: true,
    },
    spaceStatus: {
      type: String,
      enum: ["OWNED", "RENTED", "LOOKING_TO_LEASE", "NONE"],
      default: "OWNED",
    },
    approxAreaSqFt: {
      type: Schema.Types.Mixed,
      default: "",
    },
    investmentBudget: {
      type: String,
      trim: true,
      default: "5 - 10 Lakhs",
    },
    timeline: {
      type: String,
      trim: true,
      default: "Immediate",
    },
    experience: {
      type: String,
      trim: true,
      default: "",
    },
    remarks: {
      type: String,
      trim: true,
      default: "",
    },
    ipAddress: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["NEW", "CONTACTED", "UNDER_REVIEW", "APPROVED", "REJECTED"],
      default: "NEW",
    },
    adminRemarks: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

FranchiseInquirySchema.index({ location: "2dsphere" });

export default FranchiseInquirySchema;
