import classes from "./OurStory.module.scss";

let ourStoryArr = [
  { number: 6, text: "Inspiring Location" },
  { number: 7, text: "Years of empowering entrepreneurs" },
  { number: 80, text: "Passionate team members" },
  { number: "250K+", text: "Thriving members" },
  { number: "25K", text: "SQM of flexible workforce" },
  { number: "$5M", text: "Turnover" },
];

const OurStory = () => {
  return (
    <div className={classes["our-story-container"]}>
      <div className={classes["our-story-content-container"]}>
        <p className={classes["our-story-tag"]}>OUR STORY</p>
        <div className={classes["our-story-title"]}>
          Cultivating a<br />
          space where
          <br />
          business
          <br />
          bloom.
        </div>
        <p className={classes["our-story-desc"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          esse. Itaque minus ipsum, voluptate quia, quo ut et dignissimos
          delectus aliquid in voluptas modi fugiat sint natus, id pariatur. Ipsa
          delectus aliquid in voluptas modi fugiat sint natus, id pariatur.
          Ipsa.
        </p>
      </div>
      <div className={classes["our-story-info-container"]}>
        {ourStoryArr.map((el, index) => (
          <div key={index} className={classes["our-story-element"]}>
            <div className={classes["our-story-element-text"]}>
              <p className={classes["big-number"]}>{el.number}</p>
              <p className={classes["text"]}>{el.text}</p>
            </div>
            <p className={classes["separator"]}></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
