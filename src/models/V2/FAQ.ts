import { Model, model, models } from "mongoose";
import { FAQSchema } from "../../schemas/V2";
import type { IFAQAttributes } from "../../schemas/V2";

export type FAQModel = Model<IFAQAttributes>;

const FAQ: FAQModel =
  (models.FAQ as FAQModel) ||
  (models.Faq as FAQModel) ||
  model<IFAQAttributes, FAQModel>("FAQ", FAQSchema);

export default FAQ;
