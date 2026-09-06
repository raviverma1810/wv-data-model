// visitor modal

import mongoose, { Model } from "mongoose";

import VisitorSchema, { IVisitor } from "../schemas/VisitersSchema";

export type VisitorModel = Model<IVisitor>;

const Visitor =
    (mongoose.models.Visitor as VisitorModel) ||
    mongoose.model<IVisitor>("Visitor", VisitorSchema);

export default Visitor;
