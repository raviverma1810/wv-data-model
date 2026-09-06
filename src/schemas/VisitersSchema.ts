// Visitor schema - for landing on WhatsVeg app 

import { Schema, Types } from "mongoose";

export interface IVisitor {
    visitorId?: string;
    ipAddress?: string;
    country?: string;
    city?: string;

    coordinates?: {
        lat: number;
        lng: number;
    };

    firstVisitAt: Date;
    lastVisitAt: Date;

    pagesVisited: {
        page: string;
        count: number;
    }[];

    devices?: {
        type: string;
        browser: string;
    }[];

    createdAt: Date;
    updatedAt: Date;
}
const VisitorSchema = new Schema<IVisitor>(
    {
        visitorId: { type: String, default: "" },
        ipAddress: { type: String, default: "" },
        country: { type: String, default: "" },
        city: { type: String, default: "" },
        coordinates: {
            lat: { type: Number, default: 0 },
            lng: { type: Number, default: 0 },
        },
        firstVisitAt: { type: Date, default: Date.now },
        lastVisitAt: { type: Date, default: Date.now },
        pagesVisited: [
            {
                page: { type: String, default: "/" },
                count: { type: Number, default: 1 },
            },
        ],
        devices: [
            {
                type: { type: String, default: "" },
                browser: { type: String, default: "" },
            },
        ],
    },
    { timestamps: true },
);

export default VisitorSchema;