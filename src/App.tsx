import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { TweetsDetailsPage } from "./TweetDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/home" />}
         />
        <Route path="home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detailsPage" element={<TweetsDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
