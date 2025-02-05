import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./DefaultLayout.module.scss";
import CookieContainer from "../CookieContainer/CookieContainer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes["default-layout"]}>
      <CookieContainer/>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
