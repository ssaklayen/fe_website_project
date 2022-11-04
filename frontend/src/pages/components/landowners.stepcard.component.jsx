import React from "react";

import step1_image from "../images/step_1.png";
import step2_image from "../images/step_2.png";
import step3_image from "../images/step_3.png";

export default function StepCard(props) {
  const cards = {
    header: ["STEP 1", "STEP 2", "STEP 3"],
    subheader: ["Lease or Sell", "Project Permitting", "Energize and Optimize"],
    body: [
      "You option to lease or sell your property to Flatiron Energy at a competitive rate. These payments are paid to you day 1.",
      "Flatiron obtains the necessary approvals from the utility, state and local permitting offices. Payments continue as Flatiron advances project feasibility.",
      "You start receiving payments under the competitive lease or sale agreement once we trigger the option to prepare for construction of the facility.",
    ],
    image: [step1_image, step2_image, step3_image],
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
