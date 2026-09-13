import mongoose, { Model } from "mongoose";
import PincodeSchema, { IPincodeAttributes } from "../../schemas/V2/PincodeSchema";

export type PincodeModel = Model<IPincodeAttributes>;

const Pincode =
  (mongoose.models.Pincode as PincodeModel) ||
  mongoose.model<IPincodeAttributes>("Pincode", PincodeSchema);

export default Pincode;
