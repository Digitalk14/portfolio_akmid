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
    description: "Sinet Team is an informal association of IT companies, non-profit projects and development initiatives that dates back to its formation in 1999 in North-Eastern Siberia, in Yakutsk, the coldest city in the world. The company SakhaInternet companies, later renamed 'the Sinet Group', is developing and transforming itself from a group of companies into something much greater – a visionary entrepreneurial ideology.",
  },
  {
    imgUrl: `${assetPrefix()}/assets/images/projects/no-photo.svg`,
    title: {
      name: "svalki.ykt.ru",
      role: "Full-stack Engineer",
      website: "https://github.com/Digitalk14/svalki-ykt",
    },
    description: "A project organization aimed at the development of Yakutia and the world through development projects, using new technologies and scientific achievements.",
  },
];
