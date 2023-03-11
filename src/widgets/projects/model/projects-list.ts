import { assetPrefix } from "~/shared";

interface IPROJECTS_LISTProps {
  imgUrl: string;
  title: {
    name: string;
    role: string;
    website: string;
  };
  description: string;
}

export const PROJECTS_LIST: IPROJECTS_LISTProps[] = [
  {
    imgUrl: `${assetPrefix()}/assets/images/projects/indrive.jpg`,
    title: {
      name: "inDrive",
      role: "Frontend Engineer",
      website: "https://indrive.com/en/home/",
    },
    description:
      "inDrive is an international Internet aggregator of passenger, freight and intercity transportation services.",
  },
  {
    imgUrl: `${assetPrefix()}/assets/images/projects/sinet-team.jpg`,
    title: {
      name: "sinet.team",
      role: "Frontend Engineer",
      website: "https://sinet.team",
    },
    description: "",
  },
  {
    imgUrl: "",
    title: {
      name: "svalki.ykt.ru",
      role: "Full-stack Engineer",
      website: "https://github.com/Digitalk14/svalki-ykt",
    },
    description: "",
  },
];
