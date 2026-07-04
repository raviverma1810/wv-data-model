import mongoose, { Model } from "mongoose";

import UnitSchema, { UnitAttributes } from "../schemas/UnitSchema";

export type UnitModel = Model<UnitAttributes>;

const Unit = (mongoose.models.Unit as UnitModel) || mongoose.model<UnitAttributes>("Unit", UnitSchema);

export default Unit;