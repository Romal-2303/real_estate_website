"use client";

import Link from "next/link";
import classes from "./Navpanel.module.scss";
import { useEffect, useState } from "react";

let navLinkArr = [
  { title: "Home", path: "/" },
  { title: "About", path: "/aboutus" },
  { title: "Careers", path: "/careers" },
  { title: "Contact Us", path: "/" },
];

const Navpanel = () => {
  const [selectedNavLink, setSelectedNavLink] = useState<string>("");

  useEffect(() => {
    const findPath =
      navLinkArr.find((el) => el.path === window.location.pathname) ??
      navLinkArr[0];

    setSelectedNavLink(findPath?.title);
  }, []);

  const linkClickHandler = (receivedValue: string) => () => {
    setSelectedNavLink(receivedValue);
  };

  return (
    <div className={classes["navigation-panel-container"]}>
      {navLinkArr.map((el, index) => (
        <Link
          key={index}
          href={el.path}
          className={
            selectedNavLink === el.title
              ? `${classes["link-container"]} ${classes["link-container-active"]}`
              : classes["link-container"]
          }
          onClick={linkClickHandler(el.title)}
        >
          {el.title}
        </Link>
      ))}
    </div>
  );
};

export default Navpanel;
