import React from "react";
import "./TEDx_Experience.css";

function TEDx_Experience() {
  const tedxDescription = `
TEDx Speaking Experience:
I had the privilege of speaking at TEDx about "Educated But Not Empowered : The Illusion Of Making Choices". This experience was transformative and allowed me to 
share my insights and passion with a diverse audience. The talk focused on the challeges faced by educated women by not being empowered enough to make decisions in life and also told the audience about the famous quote regarding "A person should know How to think rather than What to think", encouraging listeners to think 
differently about empowerment and decision-making. Standing on stage and connecting with the audience reinforced my commitment to 
continuous learning and public engagement. This opportunity helped me develop my communication skills and 
contributed to my professional growth.
  `;

  return (
    <section id="tedx-experience">
      <h1>TEDx Speaking Experience</h1>
      <div className="tedx-container">
        <div className="tedx-image-column">
          <img 
            src="/images/TEDx_Harini.jpeg" 
            alt="TEDx Speaking Experience" 
            className="tedx-image"
          />
        </div>
        <div className="tedx-description-column">
          <p>{tedxDescription}</p>
        </div>
      </div>
    </section>
  );
}

export default TEDx_Experience;
