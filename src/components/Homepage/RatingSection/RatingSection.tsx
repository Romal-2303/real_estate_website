import CardsContainer from "./CardsContainer/CardsContainer";
import classes from "./RatingSection.module.scss";

let userArr = [
  "./bearded_man.jpg",
  "./user2.jpg",
  "./bearded_man.jpg",
  "./user2.jpg",
];

const RatingSection = () => {
  return (
    <div className={classes["rating-section-container"]}>
      <div className={classes["rating-number-container"]}>
        <div className={classes["container-content"]}>
          <p className={classes["trusted-text"]}>
            Trusted by
            <br />
            <span>100 Million</span> buyers
          </p>
          <p className={classes["content-desc"]}>
            Only we can connect you directly to the person that knows the
            <br /> most about a property for sale, the listing agent.
          </p>
        </div>
        <div className={classes["user-rating-number-container"]}>
          <div className={classes["user-container"]}>
            {userArr.map((userLimnk, index) => (
              <div
                key={index}
                style={{ zIndex: index + 1, left: `${index * 43}px` }}
                className={classes["user-circle"]}
              >
                <img src={userLimnk} alt="user.jpg" />
              </div>
            ))}
          </div>
          <div className={classes["number-container"]}>
            <div className={classes["block"]}>
              <p className={classes["block-title"]}>100M</p>
              <p className={classes["block-desc"]}>Happy Customers</p>
            </div>
            <div className={classes["block"]}>
              <p className={classes["block-title"]}>40M</p>
              <p className={classes["block-desc"]}>Client Review</p>
            </div>
            <div className={classes["block"]}>
              <p className={classes["block-title"]}>4.6</p>
              <p className={classes["block-desc"]}>Positive Rating</p>
            </div>
          </div>
        </div>
      </div>
      <CardsContainer />
    </div>
  );
};

export default RatingSection;
