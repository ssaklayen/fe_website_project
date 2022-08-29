import React from "react";

export default function StepCard(props) {
  const cards = {
    header: [
      "Step 1 - Lease to Flatiron Energy",
      "Step 2 - Project Permitting",
      "Step 3 - Energize and Operate",
    ],
    body: [
      "You option-to-lease your property to Flatiron Energy at a competitive rate. These payments are paid to you day 1 and continue as Flatiron continues to explore the feasibility of the project.",
      "Flatiron obtains the necessary approvals from the utility, state and local permitting offices.",
      "We trigger the option-to-lease to prepare for construction of the facility and you start receiving payments under the lease agreement. We handle all equipment procurement, operations, and long-term maintenance of the energy storage system. As the property owner, you simply earn predictable lease revenue over the long haul.",
    ],
  };

  return (
    <div className={props.class}>
      <div className="step-card-inner-wrapper">
        <h4>{cards.header[props.card]}</h4>
        <p>{cards.body[props.card]}</p>
      </div>
    </div>
  );
}
