// Area Banner model

import mongoose, { Model } from "mongoose";

import AreaBannerSchema, {
  AreaBannerAttributes,
} from "../../schemas/AreaBannerSchema";

export type AreaBannerModel = Model<AreaBannerAttributes>;

const AreaBanner =
  (mongoose.models.AreaBanner as AreaBannerModel) ||
  mongoose.model<AreaBannerAttributes>("AreaBanner", AreaBannerSchema);

export default AreaBanner;
