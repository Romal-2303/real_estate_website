interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const BedIcon = ({
  color = "#000000",
  width = "16",
  height = "16",
}: SvgProps) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      width={width}
      height={height}
    >
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M28,16V9c0-1.1-0.9-2-2-2H6C4.9,7,4,7.9,4,9v7"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M8,16v-2c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v2"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M16,16v-2c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v2"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M3,18v8h3v-2h20v2h3v-8c0-1.1-0.9-2-2-2H5
	C3.9,16,3,16.9,3,18z"
      />
    </svg>
  );
};

export default BedIcon;
