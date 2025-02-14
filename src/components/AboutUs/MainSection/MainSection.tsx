"use client";

import classes from "./MainSection.module.scss";
import ArrowWithTail from "@/assets/icons/ArrowWithTail";
import PeopleTalkingIllustration from "@/assets/animations/PeopleTalkingIllustration";
import useIsMobile from "@/hooks/useIsMobile";

const MainSection = () => {
  const isMobile = useIsMobile(650);

  return (
    <div className={classes["main-section"]}>
      <div className={classes["about-us-title-container"]}>
        <p className={classes["small-text"]}>
          How Redmail help to grew your business
        </p>
        <p className={classes["big-title"]}>
          Designed for efficiency, <br />
          built for collaboration.
        </p>

        {!isMobile && (
          <div className={classes["illustration-container"]}>
            <PeopleTalkingIllustration />
          </div>
        )}
      </div>
      {isMobile && (
        <div className={classes["illustration-container"]}>
          <PeopleTalkingIllustration />
        </div>
      )}
      <div className={classes["video-description-container"]}>
        <div className={classes["description-container"]}>
          <div className={classes["two-vertical-paras"]}>
            <p>From a spark of inspiration to a network of vibrant hubs,</p>
            <p>Eplore how the Redmail story can inspire yours!</p>
          </div>
          <p className={classes["explore-btn"]}>
            Explore <ArrowWithTail rotation={180} color="black" />{" "}
          </p>
        </div>

        <div className={classes["video-container"]}>
          <video
            loop
            autoPlay
            muted
            src={
              "https://marketingpicbucket.s3.eu-north-1.amazonaws.com/6016426_People_Person_3840x2160.mp4"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
