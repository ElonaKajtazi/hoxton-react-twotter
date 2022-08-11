import { Link } from "react-router-dom";

export function LeftMenu() {
  return (
    <section className="left-menu">
      <img
        className="twotter-logo"
        src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
        alt="twotter logo"
      />
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/home" className="nav-list-item">
              {" "}
              <img
                className="nav-icon"
                src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                alt="home"
              />
              <h2 className="lm-item-title">Home</h2>
            </Link>
          </li>
          <li>
            <a href="#" className="nav-list-item">
              <img
                className="nav-icon"
                src="https://cdn-icons-png.flaticon.com/512/1827/1827975.png"
                alt="explore"
              />
              <h2 className="lm-item-title">Explore</h2>
            </a>
          </li>
          <li>
            <a href="#" className="nav-list-item">
              <img
                className="nav-icon"
                src="https://cdn-icons.flaticon.com/png/512/2529/premium/2529521.png?token=exp=1660056106~hmac=a7b253cf767b0de13b6c016b67282861"
                alt="notifications"
              />
              <h2 className="lm-item-title">Notification</h2>
            </a>
          </li>
          <li>
            <a href="#" className="nav-list-item">
              <img
                className="nav-icon"
                src="https://cdn-icons.flaticon.com/png/512/542/premium/542638.png?token=exp=1660056246~hmac=048be8a8df7360333d8bbf89a64d9f84"
                alt="messages"
              />
              <h2 className="lm-item-title">Messages</h2>
            </a>
          </li>
          <li>
            <a href="#" className="nav-list-item">
              <img
                className="nav-icon"
                src="https://cdn-icons-png.flaticon.com/512/25/25667.png"
                alt="bookmarks"
              />
              <h2 className="lm-item-title">Bookmarks</h2>
            </a>
          </li>
          <li>
            <a href="#" className="nav-list-item">
              <img
                className="nav-icon"
                src="https://cdn-icons.flaticon.com/png/512/1950/premium/1950715.png?token=exp=1660056418~hmac=fdc89ba4e830f6e3c326adee9c5ce9d2"
                alt="lists"
              />
              <h2 className="lm-item-title">Lists</h2>
            </a>
          </li>
          <li>
            <Link to="/profile" className="nav-list-item">
              {" "}
              <img
                className="nav-icon"
                src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                alt="profile"
              />
              <h2 className="lm-item-title">Profile</h2>
            </Link>
          </li>
          <li>
            <a href="#" className="nav-list-item">
              <img
                className="nav-icon"
                src="https://cdn-icons-png.flaticon.com/512/570/570223.png"
                alt="more"
              />
              <h2 className="lm-item-title">More</h2>
            </a>
          </li>
          <button className="tweet-btn">Tweet</button>
        </ul>
      </nav>
    </section>
  );
}
