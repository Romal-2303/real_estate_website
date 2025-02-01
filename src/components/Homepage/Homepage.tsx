import FindHome from "./FindHome/FindHome";
import MainSection from "./MainSection/MainSection";
import RatingSection from "./RatingSection/RatingSection";
import Testimonials from "./Testimonials/Testimonials";

const Homepage = () => {
  return (
    <>
      <MainSection />
      <RatingSection />
      <FindHome />
      <Testimonials />
    </>
  );
};

export default Homepage;
