import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import "../CSS/MyList.css";

const MyList = () => {
  const navigate = useNavigate();
  return (
    <div className="mylist">
      <Nav />
      <div className="myList_container">
        <button className="home_myList_btn" onClick={() => navigate("/mylist")}>
          My List
        </button>
        <button className="home_liked" onClick={() => navigate("/liked")}>
          Liked
        </button>
      </div>
    </div>
  );
};

export default MyList;
