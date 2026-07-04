import mongoose, { Model } from "mongoose";

import ProductSchema, { ProductAttributes } from "../schemas/ProductSchema";

export type ProductModel = Model<ProductAttributes>;

const Product = (mongoose.models.Product as ProductModel) || mongoose.model<ProductAttributes>("Product", ProductSchema);

export default Product;