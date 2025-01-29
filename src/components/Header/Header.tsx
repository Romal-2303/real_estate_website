import classes from "./Header.module.scss";
import Navpanel from "./Navpanel/Navpanel";
import UtilityButtons from "./UtilityButtons/UtilityButtons";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["logo-container"]}>YOUR LOGO</div>
      <div className={classes["nav-panel-wrapper"]}>
        <Navpanel />
      </div>
      <div className={classes["utility-buttons-wrapper"]}>
        <UtilityButtons />
      </div>
    </div>
  );
};

export default Header;
