import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import SignUp from "./Pages/SignUp";
import Player from "./Components/Player";
import Profile from "./Pages/Profile";
import MyList from "./Pages/MyList";
import Liked from "./Pages/Liked";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/liked" element={<Liked />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/player" element={<Player />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
