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
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  photoUrl: string;
  city: string;
  state: string;
  coutry: string;
  bio: string;
  degree: string;
  fieldOfStudy: string;
  university: string;
  duration: string;
  location: string;
  grade: string;
  workExperience: workExperienceType[];
  skills: string[];
  certifications: string[];
  projects: ProjectsType[];
  languages: string[];
};
