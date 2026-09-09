import { Schema, Types } from "mongoose";

export interface IProductVariantAttributes {
  productId: Schema.Types.ObjectId;

  name: string;
  namePrefix?: string;
  nameSuffix?: string;
  slug: string;

  sku: string;
  barcode: string;
  displayName: string; // prefix + p.name + name + suffix

  description?: string;

  primaryThumbnail?: string;
  altThumbnails?: string[];
  primaryImage?: string;
  altImages?: string[];

  uom: string;
  qty: number;
  netWeight?: number;
  grossWeight?: number;
  dimensionsLength?: number;
  dimensionsWidth?: number;
  dimensionsHeight?: number;

  packSize?: string;
  packagingType?: string;

  mrp: string;
  price: string;
  gstApplicable?: boolean;
  gstPercentage?: number;

  active: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}
