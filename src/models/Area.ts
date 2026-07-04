import mongoose, { Model } from "mongoose";

import AreaSchema, { AreaAttributes } from "../schemas/AreaSchema";

export type AreaModel = Model<AreaAttributes>;

const Area = (mongoose.models.Area as AreaModel) || mongoose.model<AreaAttributes>("Area", AreaSchema);

export default Area;