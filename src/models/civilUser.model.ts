import mongoose from "mongoose";
import {
  CivilUserType,
  ProjectsType,
  workExperienceType,
} from "../shared/types";

const workExperienceSchema = new mongoose.Schema<workExperienceType>({
  jobTitle: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: true,
  },

  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  achievements: [{ type: String, required: true }],
});

const projectsSchema = new mongoose.Schema<ProjectsType>({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },

  technologies: [{ type: String, required: true }],

  role: {
    type: String,
    required: true,
  },

  client: {
    type: String,
    default: "",
  },

  teamSize: {
    type: Number,
    required: true,
  },
});

const civilUserSchema = new mongoose.Schema<CivilUserType>({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  dateOfBirth: {
    type: Date,
    required: true,
  },

  photoUrl: {
    type: String,
    default: "",
  },

  city: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },

  coutry: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
    required: true,
  },

  degree: {
    type: String,
    required: true,
  },

  fieldOfStudy: {
    type: String,
    required: true,
  },

  university: {
    type: String,
    required: true,
  },

  duration: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  grade: {
    type: String,
    required: true,
  },

  skills: [{ type: String, required: true }],

  certifications: [{ type: String, default: "" }],

  languages: [{ type: String, required: true }],

  workExperience: [workExperienceSchema],
    projects: [projectsSchema],
  
});

export const CivilUser = mongoose.model("CivilUser", civilUserSchema);
