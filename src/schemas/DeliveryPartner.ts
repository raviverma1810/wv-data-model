// DeliveryPartner schema 
import { Schema, Types } from "mongoose";

export interface DeliveryPartnerAttributes {
    name: string;
    name_hindi: string;
    phone: string;
    email: string;
    password?: string;
    profile_image?: string;
    address: string;
    city?: Types.ObjectId;
    pincode?: Types.ObjectId;
    area?: Types.ObjectId;
    store: Types.ObjectId;
    vehicle_number: string;
    vehicle_type: "bike" | "scooter" | "car" | "van" | "rikshaw" | "truck";
    admin_approved?: boolean;
    status?: boolean;
    duty_status?: "online" | "offline" | "on_delivery";
    startedAt?: Date;
    endedAt?: Date;
    rating?: number;
    current_latitude?: number;
    current_longitude?: number;
    last_location_updated_at?: Date;
    emergency_contact?: {
        name: string;
        phone: string;
        relation: string;
    };
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
        password: {
            type: String,
            maxlength: 250,
        },
        profile_image: {
            type: String,
            maxlength: 500,
        },
        address: {
            type: String,
            required: true,
            maxlength: 500,
        },
        city: {
            type: Schema.Types.ObjectId,
            required: false,
        },
        pincode: {
            type: Schema.Types.ObjectId,
            required: false,
        },
        area: {
            type: Schema.Types.ObjectId,
            required: false,
        },
        store: {
            type: Schema.Types.ObjectId,
            ref: "StoreV2",
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
        duty_status: {
            type: String,
            enum: ["online", "offline", "on_delivery"],
            default: "offline",
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
        current_latitude: {
            type: Number,
        },
        current_longitude: {
            type: Number,
        },
        last_location_updated_at: {
            type: Date,
        },
        emergency_contact: {
            name: {
                type: String,
                maxlength: 250,
            },
            phone: {
                type: String,
                maxlength: 15,
            },
            relation: {
                type: String,
                maxlength: 50,
            },
        },
        bank_details: {
            account_number: {
                type: String,
                required: true,
                maxlength: 18,
            },
            ifsc_code: {
                type: String,
                required: true,
                maxlength: 11,
            },
            bank_name: {
                type: String,
                required: true,
                maxlength: 250,
            },
            branch_name: {
                type: String,
                required: true,
                maxlength: 250,
            },
        },
        upi_details: {
            upi_id: {
                type: String,
                required: true,
                maxlength: 250,
            },
        },
    },
    {
        timestamps: true,
    },
);

export default DeliveryPartnerSchema;
