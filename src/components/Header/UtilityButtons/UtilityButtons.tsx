"use client";

import { Fragment, useState } from "react";
import classes from "./UtilityButtons.module.scss";
import useIsMobile from "@/hooks/useIsMobile";
import CloseIcon from "@/assets/icons/CloseIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import { motion } from "framer-motion";
import Link from "next/link";

let navLinkArr = [
  { title: "Home", icon: <></>, path: "/" },
  { title: "About Us", icon: <></>, path: "/aboutus" },
  { title: "Reviews", icon: <></>, path: "/" },
  { title: "Products", icon: <></>, path: "/aboutus" },
  { title: "Career", icon: <></>, path: "/career" },
];

const UtilityButtons = () => {
  const isMobile = useIsMobile(650);
  const [menuVisibility, setMenuVisibility] = useState(false);

  const menuClickHandler = () => {
    setMenuVisibility((prevState) => !prevState);
  };

  return (
    <Fragment>
      {isMobile ? (
        <Fragment>
          <div
            className={classes["menu-icon-container"]}
            onClick={menuClickHandler}
          >
            {menuVisibility ? (
              <CloseIcon width="16" height="16" />
            ) : (
              <MenuIcon color="black" />
            )}
          </div>
          {menuVisibility && (
            <div className={classes["menu-container"]}>
              <div className={classes["signin-sigup-btn-container-mobile"]}>
                <button className={classes["sign-in-btn"]}>Sign In</button>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 1 }}
                  className={classes["sign-up-btn"]}
                >
                  Create Account
                </motion.button>
              </div>

              <div className={classes["menu-content-container"]}>
                {navLinkArr.map((el, index) => (
                  <Fragment key={index}>
                    <Link
                      key={index}
                      href={el.path}
                      className={classes["link-container"]}
                    >
                      {el.title}
                    </Link>

                    {index !== navLinkArr.length - 1 && (
                      <div className={classes["horizontal-separator"]}></div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          )}
        </Fragment>
      ) : (
        <div className={classes["utility-btn-container"]}>
          <p>Find Property</p>
          <p>Join</p>
        </div>
      )}
    </Fragment>
  );
};

export default UtilityButtons;
