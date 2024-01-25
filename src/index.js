import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const profile = {
    name: "Do Anh Tuan",
    image: "tuando.jpg",
    description:
      "Full-stack web developer and learner at Udemy. When not coding or learning a course, I like to play DOTA 2 games, to listen audiobooks,  or simply savoring the beauty of Sai Gon city by the river.",
    skills: [
      {
        name: "React 💪",
        color: "blue",
      },
      {
        name: "HTML+CSS 💪",
        color: "orange",
      },
      {
        name: "JavaScript 💪",
        color: "yellow",
      },
      {
        name: "NodeJS 💪",
        color: "green",
      },
    ],
  };
  return (
    <div className='card'>
      <Avartar name={profile.name} src={profile.image} />
      <div className='data'>
        <Intro message={profile.description} />
        <SkillList skills={profile.skills} />
      </div>
    </div>
  );
}

function Avartar(props) {
  return <img className='avatar' src={props.src} alt={props.name} />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.message}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className='skill-list'>
      {props.skills.map((skill) => (
        <Skill key={skill.name} name={skill.name} color={skill.color} />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
    </div>
  );
}

const dom = ReactDOM.createRoot(document.getElementById("root"));

dom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
