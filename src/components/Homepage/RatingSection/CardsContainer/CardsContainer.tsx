"use client";
import ExploreIcon from "@/assets/icons/ExploreIcon";
import classes from "./CardsContainer.module.scss";
import styles from "../../../../designSystem/_classes.module.scss";
import { useEffect, useRef, useState } from "react";

let cardArr = [
  {
    title: "Explore great neighborhoods",
    desc: "Explore video tours, in-depth research, and \n articles on 20,000 neighborhoods.",
    icon: <ExploreIcon height="20" width="20" color="white" />,
  },
  {
    title: "Find highly rated best property",
    desc: "Explore video tours, in-depth research, and \n articles on 20,000 neighborhoods.",
    icon: <ExploreIcon height="20" width="20" color="white" />,
  },
  {
    title: "Discover condo quality buildings",
    desc: "Explore video tours, in-depth research, and \n articles on 20,000 neighborhoods.",
    icon: <ExploreIcon height="20" width="20" color="white" />,
  },
  {
    title: "Discover condo quality buildings",
    desc: "Explore video tours, in-depth research, and \n articles on 20,000 neighborhoods.",
    icon: <ExploreIcon height="20" width="20" color="white" />,
  },
];

const CardsContainer = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const mouseDownHandler = (e: any) => {
    setIsDragging(true);

    if (!trackRef.current || !thumbRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const thumbRect = thumbRef.current.getBoundingClientRect();

    // Check if clicking on the thumb itself, if so, allow dragging instead of jumping position
    if (e.clientY >= thumbRect.top && e.clientY <= thumbRect.bottom) {
      setIsDragging(true);
      return;
    }

    // Otherwise, move the thumb to the clicked position
    let newY = e.clientY - rect.top;
    const maxScroll = rect.height - thumbRef.current.offsetHeight;
    newY = Math.max(0, Math.min(newY, maxScroll));
    setScrollPosition(newY);
  };
  const mouseUpHandler = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !trackRef.current || !containerRef.current) return;

      const track = trackRef.current;
      const rect = track.getBoundingClientRect();
      let newY = e.clientY - rect.top;

      // Clamp within bounds
      newY = Math.max(0, Math.min(newY, rect.height - 100)); // 50px is thumb height

      const container = containerRef.current;
      const scrollAmount = (newY / 200) * container.scrollHeight; // Calculate 20% of the scroll height
      container.scrollTop = scrollAmount; // Scroll by the calculated amount

      setScrollPosition(newY);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", mouseUpHandler);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [isDragging]);

  const onContainerScroll = () => {
    if (!containerRef.current || isDragging) return;

    const container = containerRef.current;

    let percentScrolled = Math.floor(
      (container.scrollTop /
        (container.scrollHeight - container.clientHeight)) *
        100
    );

    setScrollPosition((120 * percentScrolled) / 100);
  };

  return (
    <div className={classes["cards-container-wrapper"]}>
      <div className={classes["scroll-container"]}>
        <div className={classes["scroll-bar-bg"]} ref={trackRef}>
          <div
            className={classes["scroll-bar"]}
            onMouseUp={mouseUpHandler}
            onMouseDown={mouseDownHandler}
            style={{ transform: `translate(-50%, ${scrollPosition}px)` }}
          ></div>
        </div>
      </div>
      <div
        id="scroll-container-unique"
        className={`${classes["cards-container"]}  ${styles["hide-scrollbar"]}`}
        ref={containerRef}
        onScroll={onContainerScroll}
      >
        {cardArr.map((el, index) => (
          <div key={index} className={classes["card-container"]}>
            <div className={classes["card-header"]}>
              <div className={classes["icon-container"]}>{el.icon}</div>
              <p>{el.title}</p>
            </div>
            <p className={classes["card-desc"]}>{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
