import mongoose, { Model } from "mongoose";

import UserSchema, { UserAttributes } from "../schemas/UserSchema";

export type UserModel = Model<UserAttributes>;

const User = (mongoose.models.User as UserModel) || mongoose.model<UserAttributes>("User", UserSchema);

export default User;