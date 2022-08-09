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
          <ul className="nav-list">
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                  alt="home"
                />
                <h3>Home</h3>
              </a>
            </li>
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="https://cdn-icons-png.flaticon.com/512/1827/1827975.png"
                  alt="explore"
                />
                <h3>Explore</h3>
              </a>
            </li>
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="https://cdn-icons.flaticon.com/png/512/2529/premium/2529521.png?token=exp=1660056106~hmac=a7b253cf767b0de13b6c016b67282861"
                  alt="notifications"
                />
                <h3>Notification</h3>
              </a>
            </li>
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="https://cdn-icons.flaticon.com/png/512/542/premium/542638.png?token=exp=1660056246~hmac=048be8a8df7360333d8bbf89a64d9f84"
                  alt="messages"
                />
                <h3>Messages</h3>
              </a>
            </li>
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="https://cdn-icons-png.flaticon.com/512/25/25667.png"
                  alt="bookmarks"
                />
                <h3>Bookmarks</h3>
              </a>
            </li>
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="https://cdn-icons.flaticon.com/png/512/1950/premium/1950715.png?token=exp=1660056418~hmac=fdc89ba4e830f6e3c326adee9c5ce9d2"
                  alt="lists"
                />
                <h3>Lists</h3>
              </a>
            </li>
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  alt="profile"
                />
                <h3>Profile</h3>
              </a>
            </li>
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="https://cdn-icons-png.flaticon.com/512/570/570223.png"
                  alt="more"
                />
                <h3>More</h3>
              </a>
            </li>
            <button className="tweet-btn">Tweet</button>
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
