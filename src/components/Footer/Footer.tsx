import XIcon from "@/assets/icons/XIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import classes from "./Footer.module.scss";
import Instagram from "@/assets/icons/Instagram";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["terms-container"]}>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
        <p>Legal</p>
        <p>Recalls</p>
      </div>
      <div className={classes["copyright-container"]}>
        <p>© 2025 Copyright by Redmail</p>
      </div>
      <div className={classes["icons-container"]}>
        <XIcon color="white" width="25" height="25" />
        <LinkedInIcon color="white" width="25" height="25" />
        <Instagram color="white" width="28" height="28" />
        <YoutubeIcon color="white" width="28" height="28" />
      </div>
    </footer>
  );
};

export default Footer;
