"use client";

import { useState } from "react";
import classes from "./TagsContainer.module.scss";
import styles from "../../../designSystem/_classes.module.scss";

let tagArr = [
  "View All",
  "Development",
  "Design",
  "marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
];

const TagsContainer = () => {
  const [activeTag, setActiveTag] = useState(0);

  const tagClickHandler = (receivedValue: number) => () => {
    setActiveTag(receivedValue);
  };

  return (
    <div className={`${classes["tags-container"]} ${styles["hide-scrollbar"]}`}>
      {tagArr.map((tag, tagIndex) => (
        <div
          key={tagIndex}
          className={
            tagIndex === activeTag
              ? `${classes["tag"]} ${classes["active-tag"]}`
              : classes["tag"]
          }
          onClick={tagClickHandler(tagIndex)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagsContainer;
