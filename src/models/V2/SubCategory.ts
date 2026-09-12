import mongoose, { Model } from "mongoose";
import SubCategorySchema, { ISubCategoryAttributes } from "../../schemas/V2/SubCategorySchema";

export type SubCategoryModel = Model<ISubCategoryAttributes>;

const SubCategory =
  (mongoose.models.SubCategory as SubCategoryModel) ||
  mongoose.model<ISubCategoryAttributes>("SubCategory", SubCategorySchema);

export default SubCategory;
