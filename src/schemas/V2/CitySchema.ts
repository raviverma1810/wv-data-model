import { Schema } from "mongoose";

export interface ICityAttributes {
  country: string;
  state: string;
  city: string;
  active: boolean;

  // Backward compatible fields
  name?: string;
  name_hindi?: string;
  status?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}

const CitySchema = new Schema<ICityAttributes>(
  {
    country: {
      type: String,
      required: true,
      trim: true,
      default: "India",
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      trim: true,
      index: true,
    },
    name_hindi: {
      type: String,
      trim: true,
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

CitySchema.pre("validate", function (this: any) {
  if (!this.city && this.name) this.city = this.name;
  if (!this.name && this.city) this.name = this.city;
  if (this.active === undefined && this.status !== undefined) this.active = this.status;
  if (this.status === undefined && this.active !== undefined) this.status = this.active;
});

export default CitySchema;
