// Area Marketing Collection model

import mongoose, { Model } from "mongoose";

import AreaMarketingCollectionSchema, {
  AreaMarketingCollectionAttributes,
} from "../../schemas/AreaMarketingCollectionSchema";

export type AreaMarketingCollectionModel =
  Model<AreaMarketingCollectionAttributes>;

const AreaMarketingCollection =
  (mongoose.models.AreaMarketingCollection as AreaMarketingCollectionModel) ||
  mongoose.model<AreaMarketingCollectionAttributes>(
    "AreaMarketingCollection",
    AreaMarketingCollectionSchema,
  );

export default AreaMarketingCollection;
