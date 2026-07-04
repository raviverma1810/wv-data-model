import mongoose, { Model } from "mongoose";

import CitySchema, { CityAttributes } from "../schemas/CitySchema";

export type CityModel = Model<CityAttributes>;

const City = (mongoose.models.City as CityModel) || mongoose.model<CityAttributes>("City", CitySchema);

export default City;