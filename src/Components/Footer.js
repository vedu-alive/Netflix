import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_loginIcons">
        <InstagramIcon className="icons" />
        <FacebookIcon className="icons" />
        <TwitterIcon className="icons" />
        <YouTubeIcon className="icons" />
      </div>
      <div className="footer_links">
        <div className="footer_link">Audio and Subtitles</div>
        <div className="footer_link">Audio Description</div>
        <div className="footer_link">Help Center</div>
        <div className="footer_link">Gift Cards</div>
        <div className="footer_link">Media Center</div>
        <div className="footer_link">Investor Relations</div>
        <div className="footer_link">Jobs</div>
        <div className="footer_link">Terms of Use</div>
        <div className="footer_link">Privacy</div>
        <div className="footer_link">Legal Notices</div>
        <div className="footer_link">Corporate Informations</div>
        <div className="footer_link">Contact Us</div>
      </div>

      <footer className="footer_footer">
        <p>© 2022 Netflix-Clone, Inc.</p>
        <p>Vedansh © 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
