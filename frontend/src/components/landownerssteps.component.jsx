import React from "react";
import StepCard from "./stepcard.component";

export default function LandownersSteps() {
    return (
        <div className="landowners-steps-wrapper">
            <h1>How It Works</h1>
            <StepCard card={0} class="step-card-outer-wrapper step-card-active" />
            <StepCard card={1} class="step-card-outer-wrapper" />
            <StepCard card={2} class="step-card-outer-wrapper" />
        </div>
    );
}