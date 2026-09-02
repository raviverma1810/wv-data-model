// Vendors schema

import { Schema, Types } from "mongoose";

export interface VendorAttributes {
  name: string;
  display_name: string;
  name_local_language?: string;
  name_hindi: string;
  city: Types.ObjectId;
  pincode: Types.ObjectId;
  area: Types.ObjectId;
  geo_latitude: number;
  geo_longitude: number;
  address: string;
  landmark?: string;
  owner_name: string;
  owner_contact: string;
  owner_alternate_contact?: string;
  owner_email?: string;
  owner_address: string;
  owner_aadhar?: string;
  owner_pan?: string;
  owner_bank_account?: string;
  owner_ifsc_code?: string;
  owner_bank_name?: string;
  owner_branch?: string;
  owner_upi_id?: string;
  status?: boolean;
  rejected?: boolean;
  rejectedReason?: string;
  rejectedAt?: Date;
  approved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const VendorSchema = new Schema<VendorAttributes>(
  {
    name: { type: String, required: true },
    display_name: { type: String, required: true },
    name_local_language: { type: String },
    name_hindi: { type: String, required: true },
    city: { type: Types.ObjectId, required: true },
    pincode: { type: Types.ObjectId, required: true },
    area: { type: Types.ObjectId, required: true },
    geo_latitude: { type: Number, required: true },
    geo_longitude: { type: Number, required: true },
    address: { type: String, required: true },
    landmark: { type: String },
    owner_name: { type: String, required: true },
    owner_contact: { type: String, required: true },
    owner_alternate_contact: { type: String },
    owner_email: { type: String },
    owner_address: { type: String, required: true },
    owner_aadhar: { type: String },
    owner_pan: { type: String },
    owner_bank_account: { type: String },
    owner_ifsc_code: { type: String },
    owner_bank_name: { type: String },
    owner_branch: { type: String },
    owner_upi_id: { type: String },
    status: { type: Boolean, default: true },
    rejected: { type: Boolean, default: false },
    rejectedReason: { type: String },
    rejectedAt: { type: Date },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true },
);  

export default VendorSchema;
