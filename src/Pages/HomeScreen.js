import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import "../CSS/HomeScreen.css";
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import axios from "axios";
import CardSlider from "../Components/CardSlider";

// import { getGenres } from "../features/netflixSlice";

function HomeScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // const getData = async () => {
  //   await axios
  //     .post("http://localhost:5000/")
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  //   console.log("getData executed");
  // };

  useEffect(() => {
    // getData();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            phone: user.phoneNumber,
          })
        );
      } else {
        // console.log("logged Out!");
        dispatch(logout);
        navigate("/signup");
      }
    });
    return unsubscribe;
  }, []);

  // console.log(user);
  return (
    <div className="homeScreen">
      <div className="nav_container">
        <Nav />
      </div>
      {/* <div className="myList_container">
        <button className="home_myList_btn" onClick={() => navigate("/mylist")}>
          My List
        </button>
        <button className="home_liked" onClick={() => navigate("/liked")}>
          Liked
        </button>
      </div> */}
      <Banner />
      <CardSlider />
      <Footer />
    </div>
  );
}

export default HomeScreen;
