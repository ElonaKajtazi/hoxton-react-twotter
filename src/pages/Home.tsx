import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LeftMenu } from "../components/LeftMenu";
import { NewTweetForm } from "../components/NewTweetForm";

export function Home() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/tweets")
      .then((res) => res.json())
      .then((data) => setTweets(data));
  }, []);
  return (
    <>
      <LeftMenu />
      <section className="main">
        <h1>Home</h1>

        <NewTweetForm />

        <ul className="tweets">
          {tweets.map((tweet) => (
            <Link to="/detailsPage">
              {" "}
              <li className="single-tweet">
                <h3>
                  {tweet.name} {tweet.userName}
                </h3>
                <p>Wine</p>
                <img
                  className="tweet-image"
                  src={tweet.image}
                  alt={tweet.name}
                />
                <div className="reacting-icons">
                  <span className="reacting-icon-container">
                    <img
                      className="reacting-icon"
                      src="https://cdn-icons.flaticon.com/png/512/3031/premium/3031126.png?token=exp=1660079824~hmac=5d8360ee543866e3131db0341642095e"
                      alt="comments icon"
                    />
                    <span>{tweet.reactions.comment}</span>
                  </span>
                  <span className="reacting-icon-container">
                    <img
                      className="reacting-icon"
                      src="https://cdn-icons.flaticon.com/png/512/5436/premium/5436565.png?token=exp=1660079771~hmac=66fca1bfd8b770da314a69fbca5f4ade"
                      alt="retweet icon"
                    />
                    <span>{tweet.reactions.retweet}</span>
                  </span>
                  <span className="reacting-icon-container">
                    <img
                      className="reacting-icon"
                      src="https://cdn-icons.flaticon.com/png/512/2961/premium/2961957.png?token=exp=1660079958~hmac=f144df53cd8c2ddb0ecc467002ba2b96"
                      alt="like icon"
                    />
                    <span>{tweet.reactions.like}</span>
                  </span>
                  <span className="reacting-icon-container">
                    <img
                      className="reacting-icon"
                      src="https://cdn-icons-png.flaticon.com/512/3580/3580382.png"
                      alt="share icon"
                    />
                    <span>{tweet.reactions.share}</span>
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
      <section className="right-menu">
        <h2>Right Menu</h2>
      </section>
    </>
  );
}
