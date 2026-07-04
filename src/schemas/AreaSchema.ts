import { Schema, Types } from "mongoose";

export interface AreaAttributes {
  name: string;
  name_local_language?: string;
  name_hindi: string;
  city: Types.ObjectId;
  pincode: Types.ObjectId;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const AreaSchema = new Schema<AreaAttributes>(
  {
    name: {
      type: String,
      required: true,
      maxlength: 250
    },
    name_local_language: {
      type: String,
      maxlength: 250
    },
    name_hindi: {
      type: String,
      required: true,
      maxlength: 250
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true
    },
    pincode: {
      type: Schema.Types.ObjectId,
      ref: "Pincode",
      required: true
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

AreaSchema.post("save", async function (doc) {
  const [CategoryArea, Category, ProductArea, Product] = await Promise.all([
    import("../models/mappings/CategoryArea.js").then((module) => module.default as any),
    import("../models/Category.js").then((module) => module.default as any),
    import("../models/mappings/ProductArea.js").then((module) => module.default as any),
    import("../models/Product.js").then((module) => module.default as any)
  ]);

  const globalCategories = await Category.find({ is_global: true, status: true });
  const existingCategoryMappings = await CategoryArea.find({
    category: { $in: globalCategories.map((category: { _id: Types.ObjectId }) => category._id) },
    area: doc._id
  });

  if (existingCategoryMappings.length === 0) {
    const categoryAreaMappings = globalCategories.map((category: { _id: Types.ObjectId; name_hindi: string }) => ({
      category: category._id,
      area: doc._id,
      name_local_language: category.name_hindi,
      status: true
    }));
    await CategoryArea.insertMany(categoryAreaMappings);
  }

  const globalProducts = await Product.find({ is_global: true, status: true });
  const existingProductMappings = await ProductArea.find({
    product: { $in: globalProducts.map((product: { _id: Types.ObjectId }) => product._id) },
    area: doc._id
  });

  if (existingProductMappings.length === 0) {
    const productAreaMappings = globalProducts.map(
      (product: { _id: Types.ObjectId; name_hindi: string; base_price: number }) => ({
        product: product._id,
        area: doc._id,
        name_local_language: product.name_hindi,
        mrp: product.base_price,
        price: product.base_price,
        status: true
      })
    );
    await ProductArea.insertMany(productAreaMappings);
  }
});

AreaSchema.post("deleteOne", { document: true, query: false }, async function (doc) {
  const [CategoryArea, ProductArea] = await Promise.all([
    import("../models/mappings/CategoryArea.js").then((module) => module.default as any),
    import("../models/mappings/ProductArea.js").then((module) => module.default as any)
  ]);

  await CategoryArea.deleteMany({ area: doc._id });
  await ProductArea.deleteMany({ area: doc._id });
});

export default AreaSchema;