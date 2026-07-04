import mongoose, { Model } from "mongoose";

import StoreAreaSchema, { StoreAreaAttributes } from "../../schemas/StoreAreaSchema";

export type StoreAreaModel = Model<StoreAreaAttributes>;

const StoreArea =
  (mongoose.models.StoreArea as StoreAreaModel) ||
  mongoose.model<StoreAreaAttributes>("StoreArea", StoreAreaSchema);

export default StoreArea;