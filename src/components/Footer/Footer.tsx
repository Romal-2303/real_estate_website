import XIcon from "@/assets/icons/XIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import classes from "./Footer.module.scss";
import Instagram from "@/assets/icons/Instagram";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import Logo from "@/assets/icons/Logo";
import SendIcon from "@/assets/icons/SendIcon";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["label-container"]}>
        <div className={classes["logo-container"]}>
          {/* <Logo width="50px" height="50px" />{" "} */}
          <p className={classes["logo-text"]}>Your Logo.</p>
        </div>

        <div className={classes["address-container"]}>
          The City Tower Floor 26 letterkol Subdari Street 8 12345 ,
          Sewonderland , Indonasia
        </div>

        <div className={classes["icons-container"]}>
          <XIcon color="#a8a7a1" width="25" height="25" />
          <LinkedInIcon color="#a8a7a1" width="25" height="25" />
          <Instagram color="#a8a7a1" width="28" height="28" />
          <YoutubeIcon color="#a8a7a1" width="28" height="28" />
        </div>
      </div>
      <div className={classes["aboutus-container"]}>
        <p style={{ color: "black" }}>About Us</p>
        <p>Mission</p>
        <p>Vission</p>
        <p>Carrer</p>
        <p>Security</p>
      </div>
      <div className={classes["recources-conatiner"]}>
        <p style={{ color: "Black" }}>Resources</p>
        <p>Blog</p>
        <p>Press</p>
        <p>Customer</p>
      </div>
      <div className={classes["consulting-conatiner"]}>
        <p style={{ color: "black" }}>Consulting</p>
        <p>Buying</p>
        <p>Selling</p>

      </div>
      
      <div className={classes["other-conatiner"]}>
        <p style={{ color: "black" }}>Other</p>
        <p>Contact</p>
        <p>Documentary</p>
        <p>Privacy Policy</p>
      </div>
      <div className={classes["email-conatiner"]}>
        <div className={classes["heading"]}>
          {" "}
          Be the first to know about Housing news everyday!
        </div>
        <div className={classes["email-input"]}>
          <input type="text" placeholder="Your Email.." />
          <div className={classes['button']}>
            <SendIcon />

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
