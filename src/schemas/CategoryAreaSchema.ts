import { HydratedDocument, Model, Schema, Types } from "mongoose";

export interface CategoryAreaAttributes {
  name_local_language?: string;
  category: Types.ObjectId;
  area: Types.ObjectId;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CategoryAreaDocument = HydratedDocument<CategoryAreaAttributes, CategoryAreaMethods>;

export interface CategoryAreaMethods {
  getDetails(this: CategoryAreaDocument): Promise<CategoryAreaDocument>;
  getCategoryDetails(this: CategoryAreaDocument): Promise<CategoryAreaDocument>;
}

export interface CategoryAreaStatics {
  getByCategoryId(categoryId: Types.ObjectId | string): Promise<CategoryAreaDocument[]>;
  getByAreaId(areaId: Types.ObjectId | string): Promise<CategoryAreaDocument[]>;
  getByAreaIdAll(areaId: Types.ObjectId | string): Promise<CategoryAreaDocument[]>;
}

export type CategoryAreaModel = Model<CategoryAreaAttributes, {}, CategoryAreaMethods> & CategoryAreaStatics;

const CategoryAreaSchema = new Schema<CategoryAreaAttributes, CategoryAreaModel, CategoryAreaMethods>(
  {
    name_local_language: {
      type: String,
      maxlength: 250
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: "Area",
      required: true
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

CategoryAreaSchema.methods.getDetails = async function () {
  await this.populate("category");
  await this.populate("area");
  return this;
};

CategoryAreaSchema.methods.getCategoryDetails = async function () {
  await this.populate("category");
  return this;
};

CategoryAreaSchema.statics.getByCategoryId = function (categoryId) {
  return this.find({ category: categoryId, status: true }).populate("category").populate("area");
};

CategoryAreaSchema.statics.getByAreaId = function (areaId) {
  return this.find({ area: areaId, status: true }).populate("category").populate("area");
};

CategoryAreaSchema.statics.getByAreaIdAll = function (areaId) {
  return this.find({ area: areaId }).populate("category").populate("area");
};

export default CategoryAreaSchema;