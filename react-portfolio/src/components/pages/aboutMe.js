import React from 'react';
import '../styles/aboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from '../styles/images/me.jpeg';


export default function About() {
  return (
    <div className="main">
      <div className="about">About Me</div>
      <img src={Me} className="me" alt="Logo" />
      <div className="para">
        Hello! I am Glen Hood, a web designer/developer focused on crafting great web
        experiences. Designing and Coding is a huge passion of mine. I enjoy creating
        beautifully designed, intuitive, and functional websites! Currently I am an proficient in HTML,
        CSS, GitHub, JavaScript, API's, NodeJS, Express, Sql, NoSql, and React
      </div>
    </div>
  );
}
