import { Schema, Types } from "mongoose";

export interface IPincodeAttributes {
  cityId?: Types.ObjectId;
  city?: Types.ObjectId;
  pincode: string;
  code?: string;
  active: boolean;
  status?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}

const PincodeSchema = new Schema<IPincodeAttributes>(
  {
    cityId: {
      type: Schema.Types.ObjectId,
      ref: "City",
      index: true,
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: "City",
      index: true,
    },
    pincode: {
      type: String,
      trim: true,
      index: true,
    },
    code: {
      type: String,
      trim: true,
      index: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

PincodeSchema.pre("validate", function (this: any) {
  if (!this.cityId && this.city) this.cityId = this.city;
  if (!this.city && this.cityId) this.city = this.cityId;
  if (!this.pincode && this.code) this.pincode = this.code;
  if (!this.code && this.pincode) this.code = this.pincode;
  if (this.active === undefined && this.status !== undefined) this.active = this.status;
  if (this.status === undefined && this.active !== undefined) this.status = this.active;
});

export default PincodeSchema;
