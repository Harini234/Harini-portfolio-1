// src/components/Skills.js
import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h1>
        <span>M</span>e and <br />
        My Tech Stack
      </h1>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-c-64.png`}
            alt="C++"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-html-48.png`}
            alt="HTML"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-css-64.png`}
            alt="CSS"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-javascript-64.png`}
            alt="JavaScript"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-reactjs-68.png`}
            alt="ReactJS"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-git-64.png`}
            alt="Git"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-python-94.png`}
            alt="Python"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-github-64.png`}
            alt="Github"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/chsarp.jpg`}
            alt="C#"
          />
        </li>
      </ul>
      <p>
        I am Software Engineer at Bank Of America.I daily upskill myself with various
        techstack in Software domain👨‍💻 by referring some of the good articles from internet, Notably from daily.dev🙂.I am currently
        working in a team at C# related domain.
        Last but not the least, I have great interest and passion in delivering and articulating my thought process by means of public speaking.
        Recently I also came across opportunity at TEDx and I see this as a great opportunity to present my views globally!
      </p>
    </section>
  );
}

export default Skills;
