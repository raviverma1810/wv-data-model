// Marketing Collection Model

import mongoose, { Model } from "mongoose";

import MarketingCollectionSchema, { MarketingCollectionAttributes } from "../schemas/MarketingCollectionSchema";

export type MarketingCollectionModel = Model<MarketingCollectionAttributes>;

const MarketingCollection = (mongoose.models.MarketingCollection as MarketingCollectionModel) || mongoose.model<MarketingCollectionAttributes>("MarketingCollection", MarketingCollectionSchema);

export default MarketingCollection;