interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const Planet = ({ color = "black", width = "12", height = "12" }: SvgProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <defs>
        {/* <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="50%" stop-color="#cccccc" />
          <stop offset="100%" stop-color="#333333" />
        </radialGradient> */}
        <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" />
          <stop offset="80%" stop-color="#000000" />
          <stop offset="100%" stop-color="#ffffff" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
    </svg>
  );
};

export default Planet;
