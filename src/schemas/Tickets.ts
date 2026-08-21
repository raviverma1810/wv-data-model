// tickets schema

import { Schema } from "mongoose";

export interface TicketAttributes {
  user_id: Schema.Types.ObjectId;
  subject: string;
  description: string;
  mobile: string;
  email: string;
  image_url?: string;
  status: "open" | "closed" | "pending";
  assigned_to?: Schema.Types.ObjectId;
  resolved_at?: Date;
  resolution_notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const TicketSchema = new Schema<TicketAttributes>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject: {
      type: String,
      required: true,
      maxlength: 250,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    mobile: {
      type: String,
      required: true,
      maxlength: 15,
    },
    email: {
      type: String,
      required: true,
      maxlength: 100,
    },
    image_url: {
      type: String,
      maxlength: 500,
    },
    status: {
      type: String,
      enum: ["open", "closed", "pending"],
      default: "open",
    },
    assigned_to: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    resolved_at: {
      type: Date,
    },
    resolution_notes: {
      type: String,
      maxlength: 2000,
    },
  },
  {
    timestamps: true,
  },
);

export default TicketSchema;
