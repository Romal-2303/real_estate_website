import Carousel from "../Carousel/Carousel";
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
      <Carousel
        imageArr={[
          "https://i.pinimg.com/736x/21/40/e1/2140e19c82f9bb6c9df62f205c0171a8.jpg",
          "https://i.pinimg.com/736x/76/d0/bd/76d0bd84f2defdb97a419098208f204a.jpg",
          "https://i.pinimg.com/736x/4a/a1/b5/4aa1b5731a541a470f806158a6b0a650.jpg",
          "https://i.pinimg.com/736x/88/3f/c9/883fc972e69bf9a438b2e33317baecb1.jpg",
          "https://i.pinimg.com/736x/3b/5a/d1/3b5ad14de2b52ba4bcd18cd0153578b3.jpg",
          "https://i.pinimg.com/736x/2c/19/28/2c1928c2e7ec7edd55f797294a6842fd.jpg",
        ]}
      />
    </div>
  );
};

export default AboutUs;
