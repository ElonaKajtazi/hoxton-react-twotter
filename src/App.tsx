import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="left-menu">
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img src="/" alt="home" />
                <h2>Home</h2>
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="main">
        <h2>Main Content</h2>
      </section>
      <section className="right-menu">
        <h2>Right Menu</h2>
      </section>
    </div>
  );
}

export default App;
