import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>
    One million seconds is about 11.5 days.One billion seconds is about 31 years and 8 months.
    </p>
    <img src={image} alt="I made this"></img>
    </div>;
}

export default About;
