// Area and Marketing Collection Schema

import { Schema, Types } from "mongoose";

export interface AreaMarketingCollectionAttributes {
  collection_name_local_language: string;
  area: Types.ObjectId;
  marketing_collection: Types.ObjectId;
  products?: Types.ObjectId[];
  display_order?: number;
  is_active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const AreaMarketingCollectionSchema =
  new Schema<AreaMarketingCollectionAttributes>(
    {
      collection_name_local_language: {
        type: String,
        required: true,
        maxlength: 250,
      },
      area: {
        type: Schema.Types.ObjectId,
        ref: "Area",
        required: true,
      },
      marketing_collection: {
        type: Schema.Types.ObjectId,
        ref: "MarketingCollection",
        required: true,
      },
      products: [
        {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
      display_order: {
        type: Number,
        default: 0,
      },
      is_active: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    },
  );

export default AreaMarketingCollectionSchema;
