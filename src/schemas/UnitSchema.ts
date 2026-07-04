import { Schema } from "mongoose";

export interface SubUnitAttributes {
  name: string;
  calculation_factor: unknown;
  status?: boolean;
  index: number;
}

export interface UnitAttributes {
  name: string;
  description?: string;
  sub_units?: SubUnitAttributes[];
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const subunitSchema = new Schema<SubUnitAttributes>(
  {
    name: {
      type: String,
      required: true,
      maxLength: 250
    },
    calculation_factor: {
      type: Schema.Types.Decimal128,
      required: true,
      max: 100000
    },
    status: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      required: true,
      max: 1000
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const UnitSchema = new Schema<UnitAttributes>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      default: "How to use this unit in product quantity: "
    },
    sub_units: [subunitSchema],
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

UnitSchema.post("save", async function (doc) {
  if (!doc.sub_units || doc.sub_units.length === 0) {
    const subUnits = [
      {
        name: "1".concat(doc.name),
        calculation_factor: 1,
        index: 99
      },
      {
        name: "2".concat(doc.name),
        calculation_factor: 2,
        index: 100
      }
    ];
    doc.sub_units = doc.sub_units ?? [];
    doc.sub_units.push(...subUnits);
    await doc.save();
  }
});

export default UnitSchema;