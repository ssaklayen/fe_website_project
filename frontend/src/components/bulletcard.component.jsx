import React from "react";

export default function BulletCard(props) {
  const cards = [
    "Backed by an institutional investor and asset manager",
    "Up to 35-year term options",
    "Predictable, long-term lease revenue",
    "Landowner can be named as additional co-insured",
    "Minimal impact to your property",
    "Up to one year of rent as collateral, guaranteed to you",
  ];

  return (
    <div className="landowners-bullet-card">
      <ul>
        <li>{cards[props.card]}</li>
      </ul>
    </div>
  );
}
