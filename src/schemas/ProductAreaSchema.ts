import { Schema, Types } from "mongoose";

export interface ProductAreaAttributes {
  name_local_language?: string;
  product: Types.ObjectId;
  area: Types.ObjectId;
  mrp?: number;
  price?: number;
  status?: boolean;
  unit_sold?: number;
  rating?: number;
  in_stock?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  // New attributes for future use
  tags?: Types.ObjectId[];
  similarity_tags?: string[];
  search_keywords?: string[];

  current_stock: number;
  reserved_stock: number;
  available_stock: number;
  minimum_stock_level: number;
  maximum_stock_level: number;
  reorder_level: number;
  // vendor related attributes
  is_vendor_sourced?: boolean;
  vendor?: Types.ObjectId;
  optional_vendor?: Types.ObjectId;
}

const ProductAreaSchema = new Schema<ProductAreaAttributes>(
  {
    name_local_language: {
      type: String,
      maxlength: 250,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: "Area",
      required: true,
    },
    mrp: {
      type: Number,  
      default: 0,
      maxlength: 5,
    },
    price: {
      type: Number,
      default: 0,
      maxlength: 5,
    },
    status: {
      type: Boolean,
      default: true,
    },
    unit_sold: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 4.2,
      min: 0,
      max: 5,
    },
    in_stock: {
      type: Boolean,
      default: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    similarity_tags: {
      type: [String],
      default: [],
    },
    search_keywords: {
      type: [String],
      default: [],
    },
    current_stock: {
      type: Number,
      default: 0,
    },
    reserved_stock: {
      type: Number,
      default: 0,
    },
    available_stock: {
      type: Number,
      default: 0,
    },
    minimum_stock_level: {
      type: Number,
      default: 1,
    },
    maximum_stock_level: {
      type: Number,
      default: 0,
    },
    reorder_level: {
      type: Number,
      default: 0,
    },
    is_vendor_sourced: {
      type: Boolean,
      default: false,
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: "Vendor",
    },
    optional_vendor: {
      type: Schema.Types.ObjectId,
      ref: "Vendor",
    },
  },
  { timestamps: true },
);

export default ProductAreaSchema;
