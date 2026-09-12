import { Model, model, models } from "mongoose";
import { StoreHomeSectionSchema } from "../../schemas/V2";
import type { IStoreHomeSectionAttributes } from "../../schemas/V2";

export type StoreHomeSectionModel = Model<IStoreHomeSectionAttributes>;

const StoreHomeSection: StoreHomeSectionModel =
  (models.StoreHomeSection as StoreHomeSectionModel) ||
  model<IStoreHomeSectionAttributes, StoreHomeSectionModel>(
    "StoreHomeSection",
    StoreHomeSectionSchema,
  );

export default StoreHomeSection;
