import mongoose, { Model } from "mongoose";

import CategorySchema, { CategoryAttributes } from "../schemas/CategorySchema";

export type CategoryModel = Model<CategoryAttributes>;

const Category = (mongoose.models.Category as CategoryModel) || mongoose.model<CategoryAttributes>("Category", CategorySchema);

export default Category;