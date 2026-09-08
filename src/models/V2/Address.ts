import mongoose, { Model } from "mongoose";

import AddressSchema, {
  IAddressAttributes,
} from "../../schemas/V2/AddressSchema";

export type AddressModelV2 = Model<IAddressAttributes>;

const AddressV2 =
  (mongoose.models.AddressV2 as AddressModelV2) ||
  mongoose.model<IAddressAttributes>("AddressV2", AddressSchema);

export default AddressV2;
