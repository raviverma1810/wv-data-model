import mongoose, { Model } from "mongoose";

import StoreSchema, { IStoreAttributes } from "../../schemas/V2/StoreSchema";

export type StoreModelV2 = Model<IStoreAttributes>;

const StoreV2 =
  (mongoose.models.StoreV2 as StoreModelV2) ||
  mongoose.model<IStoreAttributes>("StoreV2", StoreSchema);

export default StoreV2;
