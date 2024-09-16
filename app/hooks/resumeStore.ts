import { create } from "zustand";

type Store = {
  userData: UserDataProps;
  //   inc: () => void;
};

const defaultUserData: UserDataProps = {
  name: null,
  about: null,
  socials: [
    {
      type: null,
      url: null,
    },
  ],
  experiences: [
    {
      company: null,
      jobTitle: null,
      date: null,
      description: null,
    },
  ],
  projects: [
    {
      projectName: null,
      date: null,
      description: null,
      links: [
        {
          type: null,
          url: null,
        },
      ],
    },
  ],
  education: [
    {
      college: null,
      graduationDate: null,
      degree: null,
      activities: null,
      description: null,
    },
  ],
  skills: null,
};

export const useUserDataStore = create<Store>()((set) => ({
  userData: defaultUserData,
  //   inc: () => set((state) => ({ userData: state.userData + 1 })),
}));
