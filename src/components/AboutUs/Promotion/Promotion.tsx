import LightIcon from "@/assets/icons/LightIcon";
import classes from "./Promotion.module.scss";
import TargetIcon2 from "@/assets/icons/TargetIcon2";
import Handshake from "@/assets/icons/Handshake";

const Promotion = () => {
  return (
    <div className={classes["promotion-container"]}>
      <div>
        <p className={classes["redmail-tag"]}>Why Redmail?</p>
        <p className={classes["content-title"]}>
          Find your perfect fit <br />& grow with us
        </p>
      </div>
      <div className={classes["blocks-container"]}>
        <div className={classes["block-container"]}>
          <div>
            <TargetIcon2 />
          </div>
          <p className={classes["block-title"]}>Focus & Productivity</p>
          <p className={classes["block-desc"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, facere! Error fuga possimus esse, explicabo tenetur cum
            delectus vel totam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Cumque, velit!
          </p>
        </div>
        <div className={classes["block-container"]}>
          <div>
            <LightIcon />
          </div>
          <p className={classes["block-title"]}>Spark Innovation</p>
          <p className={classes["block-desc"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, facere! Error fuga possimus esse, explicabo tenetur cum
            delectus vel totam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Cumque, velit!
          </p>
        </div>
        <div className={classes["block-container"]}>
          <div>
            <Handshake />
          </div>
          <p className={classes["block-title"]}>Supportive Community</p>
          <p className={classes["block-desc"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, facere! Error fuga possimus esse, explicabo tenetur cum
            delectus vel totam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Cumque, velit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
