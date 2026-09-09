import { Schema, Types } from "mongoose";

export interface IProductStoreAttributes {
  productId: Types.ObjectId;
  storeId: Types.ObjectId;
  localName: string;

  mrp: number;
  sellingPrice: number;

  active: boolean;
  inStock: boolean;

  maxOrderLimit: number;

  createdAt?: Date;
  updatedAt?: Date;
}

const ProductStoreSchema = new Schema<IProductStoreAttributes>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    storeId: {
      type: Schema.Types.ObjectId,
      ref: "StoreV2",
      required: true,
    },
    localName: {
      type: String,
      maxlength: 250,
    },
    mrp: {
      type: Number,
      required: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    inStock: {
      type: Boolean,
      default: false,
    },
    maxOrderLimit: {
      type: Number,
      default: 3,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export default ProductStoreSchema;
