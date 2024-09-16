interface UserDataProps {
  name: string | null;
  about: string | null;
  socials: Social[] | null;
  experiences: Experience[] | null;
  projects: Project[] | null;
  education: Education[] | null;
  skills: string[] | null;
}

interface Social {
  type: string | null;
  url: string | null;
}

interface Experience {
  company: string | null;
  jobTitle: string | null;
  date: string | null;
  description: string[] | null;
}

interface Project {
  projectName: string | null;
  date: string | null;
  description: string[] | null;
  links: Link[] | null;
}

interface Link {
  type: string | null;
  url: string | null;
}

interface Education {
  college: string | null;
  graduationDate: string | null;
  degree: string | null;
  activities: string | null;
  description: string[] | null;
}

// Example of a default object with all null values
const defaultUserData: UserData = {
  name: null,
  about: null,
  socials: null,
  experiences: null,
  projects: null,
  education: null,
  skills: null,
};
