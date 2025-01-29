"use client";

import classes from "./MainSection.module.scss";
import BuildingAnimation from "@/components/Homepage/BuildingAnimation/BuildingAnimation";
import Search from "@/assets/icons/Search";
import Quote from "@/assets/icons/Quote";
import { useState } from "react";

let tagArr = ["Buy", "Rent", "Sell"];

const MainSection = () => {
  const [activeTag, setActivetag] = useState(0);

  const tagClickHandler = (receivedIndex: number) => () => {
    setActivetag(receivedIndex);
  };

  return (
    <div className={classes["homepage-container"]}>
      <h1 className={classes["homepage-header"]}>
        Connecting you <span>to the</span> <br /> <span>home</span> you love
      </h1>

      <div className={classes["building-container"]}>
        <BuildingAnimation />
      </div>

      <div className={classes["tags-input-container"]}>
        <div className={classes["tags-container"]}>
          {tagArr.map((el, index) => (
            <div
              key={index}
              className={
                activeTag === index
                  ? `${classes["tag"]} ${classes["active-tag"]}`
                  : classes["tag"]
              }
              onClick={tagClickHandler(index)}
            >
              {el}
            </div>
          ))}
        </div>
        <div className={classes["input-container"]}>
          <input placeholder="City, locality, market or pincode" />
          <div className={classes["search-icon-container"]}>
            <Search color="white" height="16" width="16" />
          </div>
        </div>
      </div>

      <div className={classes["quote-container"]}>
        <div className={classes["quote-icon-container"]}>
          <Quote color="#f1f1ee" height="130" width="130" />
          <p className={classes["quote-text"]}>
            "Your dream home is closer than you think, where
            <br /> every space tells a story. Let’s find the key to <br />
            your perfect future."
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
