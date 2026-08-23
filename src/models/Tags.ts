import mongoose, { Model } from "mongoose";

import TagsSchema, { TagsAttributes } from "../schemas/TagsSchema";

export type TagsModel = Model<TagsAttributes>;

const Tags = (mongoose.models.Tags as TagsModel) || mongoose.model<TagsAttributes>("Tags", TagsSchema);

export default Tags;