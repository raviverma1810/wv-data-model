import { Model, model, models } from "mongoose";
import { StoreBannerSchema } from "../../schemas/V2";
import type { IStoreBannerAttributes } from "../../schemas/V2";

export type StoreBannerModel = Model<IStoreBannerAttributes>;

const StoreBanner: StoreBannerModel =
  (models.StoreBanner as StoreBannerModel) ||
  model<IStoreBannerAttributes, StoreBannerModel>(
    "StoreBanner",
    StoreBannerSchema,
  );

export default StoreBanner;
