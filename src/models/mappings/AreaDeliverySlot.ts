// area delivery slot model mapping

import mongoose, { Model } from "mongoose";

import AreaDeliverySlotSchema, {
  AreaDeliverySlotAttributes,
} from "../../schemas/AreaDeliverySlotSchema";

export type AreaDeliverySlotModel = Model<AreaDeliverySlotAttributes>;

const AreaDeliverySlot =
  (mongoose.models.AreaDeliverySlot as AreaDeliverySlotModel) ||
  mongoose.model<AreaDeliverySlotAttributes>(
    "AreaDeliverySlot",
    AreaDeliverySlotSchema,
  );

export default AreaDeliverySlot;
