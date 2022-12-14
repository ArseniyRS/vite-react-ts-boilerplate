import React from "react";
import "~/styles/global.scss";

console.log(process.env.APP_KEY);
function App() {
  return (
    <div className="wrapper">
      <h1>
        <br />
        Vβ‘te
      </h1>
      <ul>
        <li>βοΈ React</li>
        <li>π Typescript</li>
        <li>π§ͺ Jest & React testing library setup</li>
        <li>π¨ Eslint</li>
        <li>π Prettier</li>
        <li>π¨ Stylelint</li>
        <li>π₯ Dockerize</li>
        <li>π Component and slice script generation</li>
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
