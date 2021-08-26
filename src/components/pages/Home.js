import React from 'react';
import '../styles/home-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="mountains">
      <div className="hello container-right">Hello.</div>
      <div className="name container-right">My name is Glen.</div>
      <div className="web container-right">I'm a Web Developer.</div>
    </div>
  );
}
