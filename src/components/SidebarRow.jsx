import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ selected, title, Icon }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sideBarRowIcon" />
      <h2 className="sideBarRowTitle">{title}</h2>
    </div>
  );
};

export default SidebarRow;
