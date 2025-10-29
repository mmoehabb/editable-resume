export interface ContactInfo {
  email: string;
  website: string;
  phone: string;
  location: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  date: string;
  degree: string;
  major: string;
}

export interface Certificate {
  id: string;
  title: string;
  date: string;
  organization: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Resume {
  fullName: string;
  jobTitle: string;
  summary: string;
  contactInfo: ContactInfo;
  projects: Project[];
  education: EducationItem[];
  experience: Experience[];
  languages: Language[];
  certificates: Certificate[];
}
