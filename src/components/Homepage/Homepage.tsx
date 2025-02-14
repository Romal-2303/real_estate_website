import BrighterDaysComponent from "../BrighterDaysComponent/BrighterDaysComponent";
import FindHome from "./FindHome/FindHome";
import MainSection from "./MainSection/MainSection";
import RatingSection from "./RatingSection/RatingSection";
import Testimonials from "./Testimonials/Testimonials";
import classes from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <MainSection />
      <RatingSection />
      <FindHome />
      <Testimonials />
      {/* <BrighterDaysComponent /> */}
    </div>
  );
};

export default Homepage;
