import mongoose from "mongoose";

import CategoryAreaSchema, { CategoryAreaAttributes, CategoryAreaModel } from "../../schemas/CategoryAreaSchema";

const CategoryArea =
  (mongoose.models.CategoryArea as CategoryAreaModel) ||
  mongoose.model<CategoryAreaAttributes, CategoryAreaModel>("CategoryArea", CategoryAreaSchema);

export default CategoryArea;