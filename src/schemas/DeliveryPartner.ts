// DeliveryPartner schema 
import { Schema, Types } from "mongoose";

export interface DeliveryPartnerAttributes {
    name: string;
    name_hindi: string;
    phone: string;
    email: string;
    address: string;
    city: Types.ObjectId;
    pincode: Types.ObjectId;
    area: Types.ObjectId;
    store: Types.ObjectId;
    vehicle_number: string;
    vehicle_type: "bike" | "scooter" | "car" | "van" | "rikshaw" | "truck";
    admin_approved?: boolean;
    status?: boolean;
    startedAt?: Date;
    endedAt?: Date;
    rating?: number;
    bank_details?: {
        account_number: string;
        ifsc_code: string;
        bank_name: string;
        branch_name: string;
    };
    upi_details?: {
        upi_id: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}

const DeliveryPartnerSchema = new Schema<DeliveryPartnerAttributes>(
    {
        name: {
            type: String,
            required: true,
            maxlength: 250,
        },
        name_hindi: {
            type: String,
            required: true,
            maxlength: 250,
        },
        phone: {
            type: String,
            required: true,
            maxlength: 15,
        },
        email: {
            type: String,
            required: true,
            maxlength: 250,
        },
        address: {
            type: String,
            required: true,
            maxlength: 500,
        },
        city: {
            type: Schema.Types.ObjectId,
            ref: "City",
            required: true,
        },
        pincode: {
            type: Schema.Types.ObjectId,
            ref: "Pincode",
            required: true,
        },
        area: {
            type: Schema.Types.ObjectId,
            ref: "Area",
            required: true,
        },
        store: {
            type: Schema.Types.ObjectId,
            ref: "Store",
            required: true,
        },
        vehicle_number: {
            type: String,
            required: true,
            maxlength: 15,
        },
        vehicle_type: {
            type: String,
            enum: ["bike", "scooter", "car", "van", "rikshaw", "truck"],
            required: true,
            maxlength: 50,
        },
        admin_approved: {
            type: Boolean,
            default: false,
        },
        status: {
            type: Boolean,
            default: true,
        },
        startedAt: {
            type: Date,
        },
        endedAt: {
            type: Date,
        },
        rating: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    },
);

export default DeliveryPartnerSchema;
