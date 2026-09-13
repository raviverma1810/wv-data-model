import mongoose, { Model } from "mongoose";
import CitySchema, { ICityAttributes } from "../../schemas/V2/CitySchema";

export type CityModel = Model<ICityAttributes>;

const City =
  (mongoose.models.City as CityModel) ||
  mongoose.model<ICityAttributes>("City", CitySchema);

export default City;
