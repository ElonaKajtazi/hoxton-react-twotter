import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="left-menu">
        <img
          className="twotter-logo"
          src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
          alt=""
        />
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  className="nav-icon"
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                  alt="home"
                />
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
