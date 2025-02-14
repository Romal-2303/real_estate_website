"use client";

import ArrowWithTail from "@/assets/icons/ArrowWithTail";
import classes from "./Carousel.module.scss";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import useIsMobile from "@/hooks/useIsMobile";

interface CarouselProps {
  imageArr: string[];
}

const items = [
  <img
    src="https://img.freepik.com/free-photo/middle-aged-hispanic-business-people_23-2151099197.jpg?t=st=1736532728~exp=1736536328~hmac=56aff665a532d7fd9edb3a9902f5599e89693992e091c86b903f70f25b60c284&w=900"
    onDragStart={() => {}}
    role="presentation"
  />,
  <img
    src="https://img.freepik.com/free-photo/middle-aged-hispanic-business-people_23-2151099197.jpg?t=st=1736532728~exp=1736536328~hmac=56aff665a532d7fd9edb3a9902f5599e89693992e091c86b903f70f25b60c284&w=900"
    onDragStart={() => {}}
    role="presentation"
  />,
  <img
    src="https://img.freepik.com/free-photo/middle-aged-hispanic-business-people_23-2151099197.jpg?t=st=1736532728~exp=1736536328~hmac=56aff665a532d7fd9edb3a9902f5599e89693992e091c86b903f70f25b60c284&w=900"
    onDragStart={() => {}}
    role="presentation"
  />,
];

const Carousel = ({ imageArr }: CarouselProps) => {
  const isMobile = useIsMobile(650);
  const [activeImageIndex, setActiveImageIndex] = useState(1);

  const rightBtnClickHandler = () => {
    setActiveImageIndex((prevState) => {
      if (prevState + 1 < imageArr.length) {
        return prevState + 1;
      } else {
        return imageArr.length - 1;
      }
    });
  };
  const leftBtnClickHandler = () => {
    setActiveImageIndex((prevState) => {
      if (prevState - 1 > 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className={classes["carousel-container"]}>
      <div className={classes["images-container"]}>
        {imageArr.map((el, index) => (
          <div
            key={index}
            className={
              activeImageIndex === index
                ? `${classes["image-container"]} ${classes["image-container-active"]}`
                : classes["image-container"]
            }
            style={
              isMobile
                ? { left: `${(index - activeImageIndex) * 500}px` }
                : { left: `${(index - activeImageIndex + 1) * 500}px` }
            }
          >
            <img src={el} alt="image.jpg"></img>
          </div>
        ))}
      </div>
      <div className={classes["controller-btn-container"]}>
        <div
          className={classes["controller-btn"]}
          onClick={leftBtnClickHandler}
        >
          <ArrowWithTail height="20" width="20" color="black" />
        </div>
        <div
          className={classes["controller-btn"]}
          onClick={rightBtnClickHandler}
        >
          <ArrowWithTail height="20" width="20" rotation={180} color="black" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
