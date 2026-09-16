import { Model, model, models } from "mongoose";
import { AppConfigSchema } from "../../schemas/V2";
import type { IAppConfigAttributes } from "../../schemas/V2";

export type AppConfigModel = Model<IAppConfigAttributes>;

const AppConfig: AppConfigModel =
  (models.AppConfig as AppConfigModel) ||
  model<IAppConfigAttributes, AppConfigModel>("AppConfig", AppConfigSchema);

export default AppConfig;
