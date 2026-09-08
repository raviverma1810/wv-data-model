import mongoose, { Model } from "mongoose";

import UserSchema, { IUserAttributes } from "../../schemas/V2/UserSchema";

export type UserModelV2 = Model<IUserAttributes>;

const UserV2 =
  (mongoose.models.UserV2 as UserModelV2) ||
  mongoose.model<IUserAttributes>("UserV2", UserSchema);

export default UserV2;
