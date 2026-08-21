// MetaData Model

import mongoose, { Model } from "mongoose";

import MetaDataSchema, { MetaDataAttributes } from "../schemas/MetaDataSchema";

export type MetaDataModel = Model<MetaDataAttributes>;

const MetaDataModel =
  (mongoose.models.MetaData as MetaDataModel) ||
  mongoose.model<MetaDataAttributes>("MetaData", MetaDataSchema);

export default MetaDataModel;
