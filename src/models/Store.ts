import mongoose, { Model } from "mongoose";

import StoreSchema, { StoreAttributes } from "../schemas/StoreSchema";

export type StoreModel = Model<StoreAttributes>;

const Store = (mongoose.models.Store as StoreModel) || mongoose.model<StoreAttributes>("Store", StoreSchema);

export default Store;