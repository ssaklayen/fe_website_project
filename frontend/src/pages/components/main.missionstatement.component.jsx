import React from "react";

export default function MissionStatement() {
  const msHighlight = "Energy storage systems";
  const msBody =
    "that integrate renewable energy onto the grid, replace fossil fuel plants, and increase grid reliability.";

  return (
    <div className="main-banner-caption">
      <h2>
        <span>{msHighlight}</span> {msBody}
      </h2>
    </div>
  );
}
