import Icon from "../images/icon.png";
import "./SidebarIcon.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import Link from "@mui/material/Link";

const SidebarIcon: React.FC<{}> = () => {
  return (
    <div className="SidebarIcon">
      <img src={Icon} alt="Ryb7532" />
      <p>Ryubu Hosoki</p>
      <div className="SNSIcons">
        <div className="SNSIcon">
          <Link
            href="https://github.com/Ryb7532/myCV/blob/main/CV.pdf"
            color="#fff"
          >
            <PersonIcon fontSize="large" />
          </Link>
        </div>
        <div className="SNSIcon">
          <Link href="mailto:hosoki.r.aa@m.titech.ac.jp" color="#fff">
            <EmailIcon fontSize="large" />
          </Link>
        </div>
        <div className="SNSIcon">
          <Link href="https://github.com/Ryb7532" color="#fff">
            <GitHubIcon fontSize="large" />
          </Link>
        </div>
        <div className="SNSIcon">
          <Link href="https://twitter.com/RHosoki" color="#fff">
            <TwitterIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarIcon;
