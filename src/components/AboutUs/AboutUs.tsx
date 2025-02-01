import classes from "./AboutUs.module.scss";
import MainSection from "./MainSection/MainSection";
import OurStory from "./OurStory/OurStory";
import Promotion from "./Promotion/Promotion";

const AboutUs = () => {
  return (
    <div className={classes["about-us-container"]}>
      <MainSection />
      <OurStory />
      <Promotion />
    </div>
  );
};

export default AboutUs;
