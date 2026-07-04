import { Schema, Types } from "mongoose";

export interface CategoryAttributes {
  name: string;
  name_hindi: string;
  emoji?: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  status?: boolean;
  is_global?: boolean;
  index?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const CategorySchema = new Schema<CategoryAttributes>(
  {
    name: {
      type: String,
      required: true,
      maxlength: 250
    },
    name_hindi: {
      type: String,
      required: true,
      maxlength: 250
    },
    emoji: {
      type: String,
      maxlength: 5
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      maxlength: 250
    },
    description: {
      type: String,
      maxlength: 2000
    },
    imageUrl: {
      type: String,
      maxlength: 500
    },
    status: {
      type: Boolean,
      default: true
    },
    is_global: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

CategorySchema.post("save", async function (doc) {
  if (!doc.is_global) {
    return;
  }

  const [CategoryArea, Area] = await Promise.all([
    import("../models/mappings/CategoryArea.js").then((module) => module.default as any),
    import("../models/Area.js").then((module) => module.default as any)
  ]);

  const areas = await Area.find();
  const existingMappings = await CategoryArea.find({
    category: doc._id,
    area: { $in: areas.map((area: { _id: Types.ObjectId }) => area._id) }
  });

  if (existingMappings.length > 0) {
    return;
  }

  const categoryAreaMappings = areas.map((area: { _id: Types.ObjectId }) => ({
    category: doc._id,
    area: area._id
  }));

  await CategoryArea.insertMany(categoryAreaMappings);
});

CategorySchema.post("findOneAndUpdate", async function (doc) {
  if (!doc || doc.status !== false) {
    return;
  }

  const CategoryArea = (await import("../models/mappings/CategoryArea.js")).default as any;
  await CategoryArea.updateMany({ category: doc._id }, { status: false });
});

export default CategorySchema;