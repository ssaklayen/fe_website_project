import React from "react";

import step1_image from "../images/step_1.png";
import step2_image from "../images/step_2.png";
import step3_image from "../images/step_3.png";

export default function StepCard(props) {
  const cards = {
    header: ["STEP 1", "STEP 2", "STEP 3"],
    subheader: [
      "Lease to Flatiron Energy",
      "Project Permitting",
      "Energize and Optimize",
    ],
    body: [
      "You option-to-lease your property to Flatiron Energy at a competitive rate. These payments are paid to you day 1 and continue as Flatiron continues to explore the feasibility of the project.",
      "Flatiron obtains the necessary approvals from the utility, state and local permitting offices.",
      "We trigger the option-to-lease to prepare for construction of the facility and you start receiving payments under the lease agreement. We handle all equipment procurement, operations, and long-term maintenance of the energy storage system. As the property owner, you simply earn predictable lease revenue over the long haul.",
    ],
    image: [step1_image, step2_image, step3_image]
  };

  return (
    <>
      <div className="step-card-image">
        <img src={cards.image[props.card]} alt="Step 1" />
      </div>
      <div className="step-card-outer-wrapper">
        <div className="step-card-inner-wrapper">
          <h3>{cards.header[props.card]}</h3>
          <h4>{cards.subheader[props.card]}</h4>
          <p>{cards.body[props.card]}</p>
        </div>
      </div>
    </>
  );
}
