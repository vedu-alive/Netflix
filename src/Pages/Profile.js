import React from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import "../CSS/Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="profile">
      <Nav />
      <div className="profile_body">
        <h1 className="profile_header">Edit Profile</h1>
        <div className="profile_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix logo"
            className="profile_img"
          />
          <div className="profile_details">
            {user?.name && <h2 className="profile_user">{user?.name}</h2>}
            {user?.email && <h3 className="profile_user">{user?.email}</h3>}
            {user?.phone && <h2 className="profile_user">{user?.phone}</h2>}
            <div className="profile_plans">
              <h3>Plans</h3>
              <button
                className="signout_btn"
                onClick={() => {
                  auth.signOut();
                  navigate("/signup");
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
