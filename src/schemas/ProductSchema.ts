import { Schema, Types } from "mongoose";

export interface ProductAttributes {
  name: string;
  name_hindi: string;
  sku: string;
  description: string;
  emoji: string;
  image_url?: string;
  base_price: number;
  base_unit: Types.ObjectId;
  default_sub_unit: string;
  category: Types.ObjectId;
  is_global?: boolean;
  status?: boolean;
  tags?: string[];
  seasonMonths?: string[];
  searchKeywords?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<ProductAttributes>(
  {
    name: {
      type: String,
      required: true,
      maxlength: 250,
    },
    name_hindi: {
      type: String,
      required: true,
      maxlength: 250,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    emoji: {
      type: String,
      required: true,
      maxlength: 5,
    },
    image_url: {
      type: String,
      maxlength: 500,
    },
    base_price: {
      type: Number,
      required: true,
      default: 10,
    },
    base_unit: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
    default_sub_unit: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    is_global: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
      default: [],
    },
    seasonMonths: {
      type: [Number],
      default: [],
    },
    searchKeywords: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

ProductSchema.post("save", async function (doc) {
  const ProductArea = (await import("../models/mappings/ProductArea.js"))
    .default as any;

  if (doc.is_global) {
    const Area = (await import("../models/Area.js")).default as any;
    const areas = await Area.find();
    const existingMappings = await ProductArea.find({
      product: doc._id,
      area: { $in: areas.map((area: { _id: Types.ObjectId }) => area._id) },
    });

    if (existingMappings.length === 0) {
      const productAreaMappings = areas.map(
        (area: { _id: Types.ObjectId; name_hindi: string }) => ({
          product: doc._id,
          area: area._id,
          name_local_language: doc.name_hindi,
          mrp: doc.base_price,
          price: doc.base_price,
        }),
      );
      await ProductArea.insertMany(productAreaMappings);
    }
  }

  if (!doc.status) {
    await ProductArea.deleteMany({ product: doc._id });
  } else if (doc.status && doc.is_global) {
    const Area = (await import("../models/Area.js")).default as any;
    const areas = await Area.find();
    const existingMappings = await ProductArea.find({
      product: doc._id,
      area: { $in: areas.map((area: { _id: Types.ObjectId }) => area._id) },
    });

    if (existingMappings.length === 0) {
      const productAreaMappings = areas.map(
        (area: { _id: Types.ObjectId; name_hindi: string }) => ({
          product: doc._id,
          area: area._id,
          name_local_language: doc.name_hindi,
        }),
      );
      await ProductArea.insertMany(productAreaMappings);
    }
  }
});

ProductSchema.post(
  "deleteOne",
  { document: true, query: false },
  async function (doc) {
    const ProductArea = (await import("../models/mappings/ProductArea.js"))
      .default as any;
    await ProductArea.deleteMany({ product: doc._id });
  },
);

export default ProductSchema;
