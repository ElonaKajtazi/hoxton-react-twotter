import { useState } from "react";

import "./App.css";
import { LeftMenu } from "./components/LeftMenu";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <section className="main">
        <h1>Home</h1>

        <form className="tweet-form">
          <img
            className="user-profile-image"
            src="https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <input type="text" placeholder="What's happening?" />
          <button className="home__tweet-btn">Tweet</button>
        </form>
        <ul className="tweets">
          <li className="single-tweet">
            <h3>Elona @ElonaKajtazi * 12h</h3>
            <p>Wine</p>
            <img
              className="tweet-image"
              src="https://images.pexels.com/photos/8473212/pexels-photo-8473212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="wine"
            />
            <div className="reacting-icons">
              <span className="reacting-icon-container">
                <img
                  className="reacting-icon"
                  src="https://cdn-icons.flaticon.com/png/512/3031/premium/3031126.png?token=exp=1660079824~hmac=5d8360ee543866e3131db0341642095e"
                  alt="comments icon"
                />
                <span>2</span>
              </span>
              <span className="reacting-icon-container">
                <img
                  className="reacting-icon"
                  src="https://cdn-icons.flaticon.com/png/512/5436/premium/5436565.png?token=exp=1660079771~hmac=66fca1bfd8b770da314a69fbca5f4ade"
                  alt="retweet icon"
                />
                <span>2</span>
              </span>
              <span className="reacting-icon-container">
                <img
                  className="reacting-icon"
                  src="https://cdn-icons.flaticon.com/png/512/2961/premium/2961957.png?token=exp=1660079958~hmac=f144df53cd8c2ddb0ecc467002ba2b96"
                  alt="like icon"
                />
                <span>2</span>
              </span>
              <span className="reacting-icon-container">
                <img
                  className="reacting-icon"
                  src="https://cdn-icons-png.flaticon.com/512/3580/3580382.png"
                  alt="share icon"
                />
                <span>2</span>
              </span>
            </div>
          </li>
        </ul>
      </section>
      <section className="right-menu">
        <h2>Right Menu</h2>
      </section>
    </div>
  );
}

export default App;
