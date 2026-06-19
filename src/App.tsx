import "./App.css";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import { useEffect, useState } from "react";
import HomeMarkDown from "./contents/home.md?raw";
import type { ContentDataType } from "./components/ContentData";
import ContentData from "./components/ContentData";

const findContent = (data: Array<ContentDataType>, link: string): string => {
  return data.reduce((acc, e) => {
    if (e.link === link) {
      return e.markdownText;
    } else {
      return acc;
    }
  }, HomeMarkDown);
};

function App() {
  const [markDown, setMarkDown] = useState(`# Not found`);
  const [curLink, setCurLink] = useState("/home");
  useEffect(() => {
    setMarkDown(findContent(ContentData, curLink) ?? HomeMarkDown);
  }, [curLink]);

  return (
    <div className="App">
      <Sidebar
        curLink={curLink}
        setCurLink={setCurLink}
        sidebarData={ContentData}
      />
      <Contents markdownText={markDown} />
    </div>
  );
}

export default App;
