import classes from "./Footer.module.scss";
import Instagram from "@/assets/icons/Instagram";
import SendIcon from "@/assets/icons/SendIcon";
import LinkedIn from "@/assets/icons/LinkedIn";
import X from "@/assets/icons/X";
import Dev from "@/assets/icons/Dev";
import Github from "@/assets/icons/Github";
import Dribble from "@/assets/icons/Dribble";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["main-content"]}>
        <div className={classes["logo-address-social-icons-container"]}>
          <div className={classes["logo-container"]}>
            <p className={classes["logo-text"]}>Your Logo.</p>
          </div>
          <div className={classes["address-container"]}>
            The City Tower Floor 26 letterkol Subdari Street 8 12345,
            Sewonderland, Indonesia
          </div>
        </div>
        <div className={classes["links-container"]}>
          <div className={classes["aboutus-container"]}>
            <p className={classes["heading"]}>Company</p>
            <p>Mission</p>
            <p>Vision</p>
            <p>Career</p>
          </div>

          <div className={classes["recources-conatiner"]}>
            <p className={classes["heading"]}>Resources</p>
            <p>Blog</p>
            <p>Press</p>
            <p>Customer</p>
          </div>

          <div className={classes["consulting-conatiner"]}>
            <p className={classes["heading"]}>Consulting</p>
            <p>Buying</p>
            <p>Selling</p>
            <p>Rent</p>
          </div>

          <div className={classes["other-conatiner"]}>
            <p className={classes["heading"]}>Legal</p>
            <p>Contact</p>
            <p>Documentary</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className={classes["label-input-container"]}>
          <div className={classes["heading"]}>
            Be the first to know about Housing news everyday!
          </div>
          <div className={classes["email-input"]}>
            <input type="text" placeholder="Your Email.." />
            <div className={classes["button"]}>
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={classes["sm-copyright-container"]}>
        <div className={classes["social-media-container"]}>
          <LinkedIn />
          <X />
          <Instagram />
          <Dev />
          <Github />
          <Dribble />
        </div>
        <p className={classes["trademark-text"]}>
          ©2077 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
