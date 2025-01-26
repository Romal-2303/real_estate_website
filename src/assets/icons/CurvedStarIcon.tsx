interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const CurvedStarIcon = ({
  color = "white",
  width = "12",
  height = "12",
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 130C2 130 51.64 102.36 77 77C102.36 51.64 130 2 130 2C130 2 157.64 51.64 183 77C208.36 102.36 258 130 258 130C258 130 207.889 152.664 183 176.5C155.581 202.76 130 258 130 258C130 258 102.507 207.939 77 182.5C51.6857 157.253 2 130 2 130Z"
        fill={color}
      />
    </svg>
  );
};

export default CurvedStarIcon;
