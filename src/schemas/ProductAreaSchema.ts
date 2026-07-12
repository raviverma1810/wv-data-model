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
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductAreaSchema = new Schema<ProductAreaAttributes>(
  {
    name_local_language: {
      type: String,
      maxlength: 250
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: "Area",
      required: true
    },
    mrp: {
      type: Number,
      default: 0,
      maxlength: 5
    },
    price: {
      type: Number,
      default: 0,
      maxlength: 5
    },
    status: {
      type: Boolean,
      default: true
    },
    unit_sold: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 4.2,
      min: 0,
      max: 5
    }
  },
  { timestamps: true }
);

export default ProductAreaSchema;