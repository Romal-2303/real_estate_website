import LocationIcon from "@/assets/icons/Location";
import ClockIcon from "@/assets/icons/ClockIcon";
import TagsContainer from "./TagsContainer/TagsContainer";
import ArrowWithTail from "@/assets/icons/ArrowWithTail";
import classes from "./Careers.module.scss";

let careersArr = [
  {
    title: "Product Designer",
    desc: "We're looking for mid-level product designer to join our team.",
    tagArr: [
      <>
        <LocationIcon /> 100% remote
      </>,
      <>
        <ClockIcon /> Full-time
      </>,
    ],
  },
  {
    title: "Engineering Manager",
    desc: "We're looking for experienced engineering manager to join our team.",
    tagArr: [
      <>
        <LocationIcon /> 100% remote
      </>,
      <>
        <ClockIcon /> Full-time
      </>,
    ],
  },
  {
    title: "Customer Success Manager",
    desc: "We're looking for customer success manager to join our team.",
    tagArr: [
      <>
        <LocationIcon /> 100% remote
      </>,
      <>
        <ClockIcon /> Full-time
      </>,
    ],
  },
  {
    title: "Account Executive",
    desc: "We're looking for account executive to join our team.",
    tagArr: [
      <>
        <LocationIcon /> 100% remote
      </>,
      <>
        <ClockIcon /> Full-time
      </>,
    ],
  },
  {
    title: "SEO Marketing Manager",
    desc: "We're looking for experienced SEO Marketing Manager to join our team.",
    tagArr: [
      <>
        <LocationIcon /> 100% remote
      </>,
      <>
        <ClockIcon /> Full-time
      </>,
    ],
  },
];

const Careers = () => {
  return (
    <div className={classes["careers-container"]}>
      <div className={classes["careers-heading-content"]}>
        <div className={classes["hiring-tag"]}>We're hiring!</div>
        <div className={classes["career-header"]}>
          <p className={classes["header"]}>Be part of our mission</p>
          <p className={classes["desc"]}>
            We're looking for passionate people to join us on our mission. We
            value <br /> flat heirarchies, clear communication, and full
            ownership and responsibility.
          </p>
        </div>
      </div>

      <TagsContainer />

      <div className={classes["jobs-list-container"]}>
        <div className={classes["horizontal-separator"]}></div>
        {careersArr.map((job, jobIndex) => (
          <>
            <div key={jobIndex} className={classes["job-list-element"]}>
              <div className={classes["job-list-element-content"]}>
                <p className={classes["job-title"]}>{job.title}</p>
                <p className={classes["job-desc"]}>{job.desc}</p>
                <div className={classes["job-list-tag-container"]}>
                  <div className={classes["remote-tag"]}>
                    <LocationIcon /> <span>100% remote</span>
                  </div>
                  <div className={classes["full-time-tag"]}>
                    <ClockIcon /> <span>Full-time</span>
                  </div>
                </div>
              </div>
              <div className={classes["apply-container"]}>
                Apply{" "}
                <ArrowWithTail
                  color="black"
                  width="18"
                  height="18"
                  rotation={135}
                />
              </div>
            </div>
            <div
              key={jobIndex + 1}
              className={classes["horizontal-separator-ele"]}
            ></div>
          </>
        ))}

        <div className={classes["circle-container"]}></div>
        <div className={classes["layer"]}></div>
      </div>
    </div>
  );
};

export default Careers;
