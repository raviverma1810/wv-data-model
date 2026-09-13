import mongoose, { Model } from "mongoose";
import ServiceAreaRequestSchema, {
  IServiceAreaRequestAttributes,
} from "../../schemas/V2/ServiceAreaRequestSchema";

export type ServiceAreaRequestModel = Model<IServiceAreaRequestAttributes>;

const ServiceAreaRequest =
  (mongoose.models.ServiceAreaRequest as ServiceAreaRequestModel) ||
  mongoose.model<IServiceAreaRequestAttributes>(
    "ServiceAreaRequest",
    ServiceAreaRequestSchema,
  );

export default ServiceAreaRequest;
