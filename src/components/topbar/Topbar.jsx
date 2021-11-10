import React from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">ShaneSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className ="searchIcon"/>
          <input placeholder="Search ShaneSocial" type="text" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImage" />
      </div>
    </div>
  );
}

export default Topbar;
