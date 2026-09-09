import { Schema, Types } from "mongoose";

export interface IProductAttributes {
  categoryId: Schema.Types.ObjectId;
  subCategoryId: Schema.Types.ObjectId;

  name: string;
  name_hindi: string;
  description: string;
  slug: string;

  shortName?: string;
  shortDescription?: string;

  emoji?: string;

  primaryImage: string;
  altImages?: string[];
  primaryThumbnail: string;
  altThumbnails?: string[];

  tags?: Types.ObjectId[];
  searchKeywords?: string[];

  availabilityMonths?: number[];

  countryOfOrigin?: string;
  brand?: string;
  manufacturer?: string;

  isPerishable: boolean;
  active: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}
