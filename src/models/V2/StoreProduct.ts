import mongoose, { Model } from "mongoose";

import ProductStoreSchema, {
  IProductStoreAttributes,
} from "../../schemas/V2/ProductStoreSchema";

export type ProductStoreModelV2 = Model<IProductStoreAttributes>;

const ProductStoreV2 =
  (mongoose.models.ProductStoreV2 as ProductStoreModelV2) ||
  mongoose.model<IProductStoreAttributes>("ProductStoreV2", ProductStoreSchema);

export default ProductStoreV2;
