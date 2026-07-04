import mongoose, { Model } from "mongoose";

import PincodeSchema, { PincodeAttributes } from "../schemas/PincodeSchema";

export type PincodeModel = Model<PincodeAttributes>;

const Pincode = (mongoose.models.Pincode as PincodeModel) || mongoose.model<PincodeAttributes>("Pincode", PincodeSchema);

export default Pincode;