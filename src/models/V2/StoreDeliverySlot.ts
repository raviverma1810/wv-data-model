import { Model, model, models } from "mongoose";
import { StoreDeliverySlotSchema } from "../../schemas/V2";
import type { IStoreDeliverySlotAttributes } from "../../schemas/V2";

export type StoreDeliverySlotModel = Model<IStoreDeliverySlotAttributes>;

const StoreDeliverySlot: StoreDeliverySlotModel =
  (models.StoreDeliverySlot as StoreDeliverySlotModel) ||
  model<IStoreDeliverySlotAttributes, StoreDeliverySlotModel>(
    "StoreDeliverySlot",
    StoreDeliverySlotSchema,
  );

export default StoreDeliverySlot;
