import mongoose, { Model } from "mongoose";
import FranchiseInquirySchema, {
  IFranchiseInquiryAttributes,
} from "../../schemas/V2/FranchiseInquirySchema";

export type FranchiseInquiryModel = Model<IFranchiseInquiryAttributes>;

const FranchiseInquiry =
  (mongoose.models.FranchiseInquiry as FranchiseInquiryModel) ||
  mongoose.model<IFranchiseInquiryAttributes>(
    "FranchiseInquiry",
    FranchiseInquirySchema,
  );

export default FranchiseInquiry;
