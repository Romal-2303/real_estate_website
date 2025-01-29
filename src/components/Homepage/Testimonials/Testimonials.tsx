"use client";

import { useState } from "react";
import classes from "./Testimonials.module.scss";
import Arrow from "@/assets/icons/Arrow";

let reviewsArr = [
  {
    username: "John Thompson",
    designation: "CEO, Creative Industry",
    testimony:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur beatae distinctio perferendis incidunt non earum facere eum eveniet. Reiciendis harum perspiciatis voluptate? Hic, adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, omnis.",
    icon: "./bearded_man.jpg",
  },

  {
    username: "Kane Bearson",
    designation: "CEO, Creative Industry",
    testimony:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur beatae distinctio perferendis incidunt non earum facere eum eveniet. Reiciendis harum perspiciatis voluptate? Hic, adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, omnis.",
    icon: "./user2.jpg",
  },
  {
    username: "Mark Phillips",
    designation: "CEO, Creative Industry",
    testimony:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur beatae distinctio perferendis incidunt non earum facere eum eveniet. Reiciendis harum perspiciatis voluptate? Hic, adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, omnis.",
    icon: "./bearded_man.jpg",
  },
  {
    username: "Dwayne Luther",
    designation: "CEO, Creative Industry",
    testimony:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur beatae distinctio perferendis incidunt non earum facere eum eveniet. Reiciendis harum perspiciatis voluptate? Hic, adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, omnis.",
    icon: "./user2.jpg",
  },
  {
    username: "David Ford",
    designation: "CEO, Creative Industry",
    testimony:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur beatae distinctio perferendis incidunt non earum facere eum eveniet. Reiciendis harum perspiciatis voluptate? Hic, adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, omnis.",
    icon: "./bearded_man.jpg",
  },
];

const Testimonials = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  const rightArrowClickHandler = () => {
    setActiveCardIndex((prevState) => {
      if (prevState + 1 > reviewsArr.length - 1) {
        return reviewsArr.length - 1;
      } else {
        return prevState + 1;
      }
    });
  };

  const leftArrowClickHandler = () => {
    setActiveCardIndex((prevState) => {
      if (prevState - 1 < 0) {
        return 0;
      } else {
        return prevState - 1;
      }
    });
  };

  return (
    <div className={classes["testimonials-container"]}>
      <p className={classes["testimonials-title"]}>
        What <span>people</span> say
      </p>
      <div className={classes["bended-carousel-section-wrapper"]}>
        <div className={classes["bended-carousel-section"]}>
          {reviewsArr.map((userDetail, index) => (
            <div
              key={index}
              style={
                activeCardIndex === index
                  ? { left: "50%", transform: "translate(-50%, 0)" }
                  : index > activeCardIndex
                  ? {
                      left: `calc(50% + ${
                        400 * (index - activeCardIndex)
                      }px + ${4 * (index - activeCardIndex)}rem)`,
                      transform: `translate(-50%, ${
                        20 * (index - activeCardIndex)
                      }%) rotate(${10 * (index - activeCardIndex)}deg)`,
                    }
                  : {
                      left: `calc(50% - ${
                        400 * (activeCardIndex - index)
                      }px - ${4 * (activeCardIndex - index)}rem)`,

                      transform: `translate(-50%, ${
                        20 * (activeCardIndex - index)
                      }%) rotate(-${10 * (activeCardIndex - index)}deg)`,
                    }
              }
              className={
                activeCardIndex === index
                  ? `${classes["card"]} ${classes["active-card"]}`
                  : `${classes["card"]}`
              }
            >
              <p className={classes["user-testimony"]}>
                "{userDetail.testimony}"
              </p>
              <div className={classes["user-info-container"]}>
                <div className={classes["user-icon-container"]}>
                  <img src={userDetail.icon} />
                </div>
                <div className={classes["user-detail"]}>
                  <p className={classes["username"]}>{userDetail.username}</p>
                  <p className={classes["user-designation"]}>
                    {userDetail.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes["arrow-container"]}>
          <div onClick={leftArrowClickHandler}>
            <Arrow
              color="black"
              rotation={90}
              height="10"
              width="13"
              strokeWidth={1}
            />
          </div>
          <div onClick={rightArrowClickHandler}>
            <Arrow
              color="black"
              rotation={-90}
              height="10"
              width="13"
              strokeWidth={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
