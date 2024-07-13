export type workExperienceType = {
  jobTitle: string;
  company: string;
  startDate: Date;
  endDate: Date;
  location: string;
  achievements: string[];
};

export type ProjectsType = {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  technologies: string[];
  role: string;
  client: string;
  teamSize: number;
};

export type CivilUserType = {
  email: string;
  isAdmin: Boolean;
  password: string;
  fullName: string;
  dateOfBirth: Date;
  photoUrl: string;
  city: string;
  state: string;
  country: string;
  bio: string;
  workExperience: workExperienceType[];
  education: EducationType[];
  skills: string[];
  certifications: string[];
  projects: ProjectsType[];
  languages: string[];
};

export type EducationType = {
  degree: string;
  fieldOfStudy: string;
  university: string;
  collegeName: string;
  duration: string;
  location: string;
};
