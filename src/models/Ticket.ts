// ticket model

import mongoose, { Model } from "mongoose";

import TicketSchema, { TicketAttributes } from "../schemas/Tickets";

export type TicketModel = Model<TicketAttributes>;

const Ticket = (mongoose.models.Ticket as TicketModel) || mongoose.model<TicketAttributes>("Ticket", TicketSchema);

export default Ticket;