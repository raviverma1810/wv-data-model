// Area home section model

import mongoose, { Model } from "mongoose";

import AreaHomeSectionSchema, {
  AreaHomeSectionAttributes,
} from "../../schemas/AreaHomeSectionSchema";

export type AreaHomeSectionModel = Model<AreaHomeSectionAttributes>;

const AreaHomeSection =
  (mongoose.models.AreaHomeSection as AreaHomeSectionModel) ||
  mongoose.model<AreaHomeSectionAttributes>(
    "AreaHomeSection",
    AreaHomeSectionSchema,
  );

export default AreaHomeSection;
