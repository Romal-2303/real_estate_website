interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const LightningIcon = ({
  color = "#000000",
  width = "45",
  height = "45",
}: SvgProps) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      id="lightning"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        id="primary"
        points="7 12 12 14 11 21 17 12 13 10 14 3 7 12"
      ></polygon>
    </svg>
  );
};

export default LightningIcon;
