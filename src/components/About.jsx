import React from "react";
import classes from "../styles/About.module.css";
import { useState } from "react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classes.body}>
      <h1>
        Hi there, I'm Djordje <br />I am a Frontend{" "}
        <span className={classes.web}>Web</span> Developer
      </h1>
      <button className={classes.button} onClick={() => setIsOpen(!isOpen)}>
        ABOUT ME
      </button>
      {isOpen && (
        <div className={classes.dropdown}>
          <p>
            I am a frontend web developer with expertise in HTML, CSS,
            JavaScript, and React. Additionally, I am familiar with backend
            technologies to create full-stack web applications. Currently, I am
            in the final stages of my studies at the DCI Digital Career
            Institute, where I am learning to become a full-stack web developer.
            Outside of my work, I enjoy sports, cooking, and traveling to
            explore new cultures and experiences. I am based in Germany and
            always looking for opportunities to further develop my skills and
            contribute to exciting projects in the tech industry.
          </p>
        </div>
      )}
    </div>
  );
}
