import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import HomeMarkDown from "../contents/home.md?raw";
import PublicationsMarkDown from "../contents/publications.md?raw";
import HistoryMarkDown from "../contents/history.md?raw";


const ContentData: ContentDataType[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
    markdownText: HomeMarkDown
  },
  {
    title: "History",
    icon: <HistoryEduIcon />,
    link: "/history",
    markdownText: HistoryMarkDown
  },
  {
    title: "Publications",
    icon: <AutoStoriesIcon />,
    link: "/publications",
    markdownText: PublicationsMarkDown
  }
];

export default ContentData;

export interface ContentDataType {
  title: string;
  icon: React.JSX.Element;
  link: string;
  markdownText: string;
}
