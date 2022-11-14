import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SignupFooter = () => {
  return (
    <div
      style={{
        paddingLeft: "3rem",
        paddingTop: "1rem",
        paddingRight: "3rem",
        color: "#A9A9A9",
        marginTop: "0.6rem",
        backgroundColor: "#000",
      }}
    >
      <div className="footer_loginIcons" style={{ paddingTop: "2rem" }}>
        Questions? Call <span className="footer_link">000-800-040-1843</span>
      </div>
      <div className="footer_links">
        <div className="footer_link">FAQ</div>
        <div className="footer_link">Audio Description</div>
        <div className="footer_link">Help Center</div>
        <div className="footer_link">Gift Cards</div>
        <div className="footer_link">Speed Test</div>
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

export default SignupFooter;
