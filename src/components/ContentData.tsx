import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
// import ConstructionIcon from "@mui/icons-material/Construction";
import HomeMarkDown from "../contents/home.md";
import PublicationsMarkDown from "../contents/publications.md";
import HistoryMarkDown from "../contents/history.md";
// import HobbyMarkDown from "../contents/hobby.md";


const ContentData: ContentDataType[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
    markdown: HomeMarkDown
  },
  {
    title: "History",
    icon: <HistoryEduIcon />,
    link: "/history",
    markdown: HistoryMarkDown
  },
  {
    title: "Publications",
    icon: <AutoStoriesIcon />,
    link: "/publications",
    markdown: PublicationsMarkDown
  // },
  // {
  //   title: "Hobby",
  //   icon: <ConstructionIcon />,
  //   link: "/hobby",
  //   markdown: HobbyMarkDown
  }
];

export default ContentData;

export interface ContentDataType {
  title: string;
  icon: JSX.Element;
  link: string;
  markdown: "*.md";
}
