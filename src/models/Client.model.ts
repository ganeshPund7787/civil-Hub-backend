import mongoose from "mongoose";
import { ClientType } from "../shared/Client.types";

const AddressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});

const ClientSchema = new mongoose.Schema<ClientType>(
  {
    fullName: { type: String, required: true },
    role: { type: String, default: "client" },
    email: { type: String, required: true, unique: true },
    address: { type: AddressSchema, required: true },
    phoneNumber: { type: String, required: true },
    company: { type: String, required: false },
    bio: { type: String, default: "" },
    website: { type: String, default: "" },
    profilePictureUrl: { type: String, default: "" },
    isAdmin: { type: String, default: false },
  },
  { timestamps: true }
);

export const Client = mongoose.model("Client", ClientSchema);
