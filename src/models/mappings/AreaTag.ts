// Area Tag model

import mongoose, { Model } from "mongoose";

import AreaTagSchema, { AreaTagAttributes } from "../../schemas/AreaTagSchema";

export type AreaTagModel = Model<AreaTagAttributes>;

const AreaTag =
  (mongoose.models.AreaTag as AreaTagModel) ||
  mongoose.model<AreaTagAttributes>("AreaTag", AreaTagSchema);

export default AreaTag;
