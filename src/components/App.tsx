import React from "react";
import "~/styles/global.scss";

console.log(process.env.APP_KEY);
function App() {
  return (
    <div className="wrapper">
      <h1>
        <br />
        V⚡te
      </h1>
      <ul>
        <li>⚛️ React</li>
        <li>📖 Typescript</li>
        <li>🧪 Jest & React testing library setup</li>
        <li>🔨 Eslint</li>
        <li>💅 Prettier</li>
        <li>🔨 Stylelint</li>
        <li>🔥 Dockerize</li>
        <li>🚀 Component and slice script generation</li>
      </ul>
      <p>Don&apos;t forget to install eslint extentions to your IDE</p>
      <a
        href="https://github.com/ArseniyRS/vite-react-ts-boilerplate"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </div>
  );
}

export default App;
