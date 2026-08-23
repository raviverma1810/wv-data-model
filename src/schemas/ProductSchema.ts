import { Schema, Types } from "mongoose";

export interface ProductAttributes {
  name: string;
  name_hindi: string;
  sku: string;
  description: string;
  emoji?: string;
  base_price: number;
  base_unit: Types.ObjectId;
  default_sub_unit: string;
  category: Types.ObjectId;
  is_global?: boolean;
  status?: boolean;
  quality_grade?: "A" | "B" | "C";
  can_be_subscribed?: boolean;
  tags?: Types.ObjectId[];
  similarity_tags?: string[];
  seasonMonths?: string[];
  searchKeywords?: string[];
  sold_units?: number;
  primary_image_url: string;
  images?: ProductImages[];
  primary_thumbnail_url: string;
  thumbnails?: ProductImages[];
  createdAt?: Date;
  updatedAt?: Date;
  // Other New Attributes
  barcode?: string;
  short_name?: string;
  short_description?: string;
  sub_category?: Types.ObjectId;
  country_of_origin?: string;
  brand?: string;
  manufacturer?: string;
  net_weight?: number;
  gross_weight?: number;
  unit_of_measure?: string;
  pack_size?: string;
  stock_measurement_unit?: Types.ObjectId;
  packaging_type?: string;
  dimensions_length?: number;
  dimensions_width?: number;
  dimensions_height?: number;
}

export interface ProductImages {
  image_url: string;
  image_order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<ProductAttributes>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
    quality_grade: {
      type: String,
      enum: ["A", "B", "C"],
      default: "B",
    },
    can_be_subscribed: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
      default: [],
    },
    similarity_tags: {
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
    sold_units: {
      type: Number,
      default: 0,
    },
    primary_image_url: {
      type: String,
      required: true,
      maxlength: 500,
    },
    primary_thumbnail_url: {
      type: String,
      required: true,
      maxlength: 500,
    },
    images: {
      type: [
        {
          image_url: {
            type: String,
            required: true,
            maxlength: 500,
          },
          image_order: {
            type: Number,
            required: true,
          },
        },
      ],
      default: [],
    },
    thumbnails: {
      type: [
        {
          image_url: {
            type: String,
            required: true,
            maxlength: 500,
          },
          image_order: {
            type: Number,
            required: true,
          },
        },
      ],
      default: [],
    },
    stock_measurement_unit: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
    },
    barcode: {
      type: String,
      maxlength: 100,
    },
    short_name: {
      type: String,
      maxlength: 100,
    },
    short_description: {
      type: String,
      maxlength: 500,
    },
    sub_category: {
      type: Schema.Types.ObjectId,
      ref: "SubCategory",
    },
    country_of_origin: {
      type: String,
      maxlength: 100,
    },
    brand: {
      type: String,
      maxlength: 100,
    },
    manufacturer: {
      type: String,
      maxlength: 100,
    },
    net_weight: {
      type: Number,
      min: 0,
    },
    gross_weight: {
      type: Number,
      min: 0,
    },
    unit_of_measure: {
      type: String,
      maxlength: 50,
    },
    pack_size: {
      type: String,
      maxlength: 50,
    },
    packaging_type: {
      type: String,
      maxlength: 100,
    },
    dimensions_length: {
      type: Number,
      min: 0,
    },
    dimensions_width: {
      type: Number,
      min: 0,
    },
    dimensions_height: {
      type: Number,
      min: 0,
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
