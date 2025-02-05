"use client";

import React, { useEffect, useState } from "react";
import classes from "./CookieContainer.module.scss";
import BackgroundScreen from "../BackgroundScreen/BackgroundScreen";
import Image from "next/image";
import CookieImage from "@/assets/Cookie.png";

const CookieContainer = () => {
  const COOKIE_STORAGE_KEY = "cookieAccepted";
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const storedValue = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (storedValue === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_STORAGE_KEY, "true");
    setIsVisible(false);
  };

  const handleOk = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <BackgroundScreen>
      <div className={classes["cookie-container"]}>
        <div className={classes["image-container"]}>
          <Image src={CookieImage} alt="" width={80} height={80} />
        </div>
        <div className={classes["text-conatiner"]}>
          Cookie Policy this site uses cookies to make it work properly, help us
          to understand how it’s used and to display content that is more
          relevant to you. For more information, see our Cookie Policy.
        </div>
        <div className={classes["button-container"]}>
          <div className={classes["accept-button"]} onClick={handleAccept}>
            Accept
          </div>
          <div className={classes["ok-button"]} onClick={handleOk}>
            Ok
          </div>
        </div>
      </div>
    </BackgroundScreen>
  );
};

export default CookieContainer;
