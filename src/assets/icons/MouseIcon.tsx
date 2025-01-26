import classes from "./SvgClasses.module.scss";

interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const MouseIcon = ({
  width = "26",
  height = "26",
  color = "white",
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 14.5C4.73858 14.5 2.5 12.2614 2.5 9.5V5.5C2.5 2.73858 4.73858 0.5 7.5 0.5C10.2614 0.5 12.5 2.73858 12.5 5.5V9.5C12.5 12.2614 10.2614 14.5 7.5 14.5Z"
        stroke={color}
      />

      <path
        d="M7.5 4V7"
        stroke="rgba(21, 212, 107)"
        className={classes["mouse-middle-line"]}
      />
    </svg>
  );
};

export default MouseIcon;
