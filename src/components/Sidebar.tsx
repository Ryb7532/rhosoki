import React from "react";
import "./Sidebar.css";
import type { ContentDataType } from "./ContentData";
import SidebarIcon from "./SidebarIcon";

const Sidebar: React.FC<{
  curLink: string;
  setCurLink: React.Dispatch<React.SetStateAction<string>>;
  sidebarData: Array<ContentDataType>;
}> = (props) => {
  return (
    <div className="Sidebar">
      <SidebarIcon />
      <ul className="SidebarList">
        {props.sidebarData.map((value, key) => {
          return (
            <li
              key={key}
              className="row"
              id={props.curLink === value.link ? "active" : ""}
              onClick={() =>
                props.setCurLink((_) => {
                  return value.link;
                })
              }
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
      <footer>Last modified: 2026-06-20</footer>
    </div>
  );
};

export default Sidebar;
