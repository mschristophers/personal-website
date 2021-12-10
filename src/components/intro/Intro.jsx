import "./intro.scss";
import { init } from "ityped";
import { Link } from 'react-router';
import { useEffect, useRef } from "react";
import Button from '@mui/material/Button';

export default function Intro() {
  const textRef = useRef();
  const resumeDir = './resume/Manuel_Stefan_Christopher_Resume.pdf';

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Math Student at Waterloo", "Software Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Manuel Stefan Christopher</h1>
          <h3><span ref={textRef}></span></h3>
          <Button href={require("" + resumeDir).default} target="_blank" className="btn">View Resume</Button>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}