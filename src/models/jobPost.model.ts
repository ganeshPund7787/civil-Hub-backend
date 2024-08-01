import mongoose, { SchemaDefinitionProperty } from "mongoose";
import { JobPostType } from "../shared/Client.types";

const jobPostSchema = new mongoose.Schema<JobPostType>({
  clientId: {
    type: mongoose.Schema.Types.ObjectId as SchemaDefinitionProperty<
      typeof mongoose.Schema.Types.ObjectId
    >,
    ref: "Client",
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  experianceLevel: {
    type: String,
    required: true,
  },
  HoursePerWeak: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  skills: [{ type: String, required: true }],
  projectDuration: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: Date,
    required: true,
  },
});

export const JobPost = mongoose.model("JobPost", jobPostSchema);
