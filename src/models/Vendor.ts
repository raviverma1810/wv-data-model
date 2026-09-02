// vendor model

import mongoose, { Model } from "mongoose";

import VendorSchema, { VendorAttributes } from "../schemas/VendorSchema";

export type VendorModel = Model<VendorAttributes>;

const Vendor =
  (mongoose.models.Vendor as VendorModel) ||
  mongoose.model<VendorAttributes>("Vendor", VendorSchema);

export default Vendor;
