import { Schema, Types } from "mongoose";

export interface PincodeAttributes {
  pincode: string;
  city: Types.ObjectId;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const PincodeSchema = new Schema<PincodeAttributes>(
  {
    pincode: {
      type: String,
      required: true,
      unique: true,
      maxlength: 10
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: "City",
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

export default PincodeSchema;