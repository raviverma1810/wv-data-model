import mongoose, { Model } from "mongoose";

import ProductAreaSchema, { ProductAreaAttributes } from "../../schemas/ProductAreaSchema";

export type ProductAreaModel = Model<ProductAreaAttributes>;

const ProductArea =
  (mongoose.models.ProductArea as ProductAreaModel) ||
  mongoose.model<ProductAreaAttributes>("ProductArea", ProductAreaSchema);

export default ProductArea;