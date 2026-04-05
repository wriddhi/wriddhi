type LivekitProps = {
  className?: string;
};

export const Livekit = ({ className }: LivekitProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_4284_33585)">
        <path
          d="M14.4004 9.59961H9.59961V14.4004H14.4004V9.59961Z"
          fill="currentColor"
        />
        <path
          d="M19.2011 4.80078H14.4004V9.60153H19.2011V4.80078Z"
          fill="currentColor"
        />
        <path
          d="M19.2011 14.4004H14.4004V19.2011H19.2011V14.4004Z"
          fill="currentColor"
        />
        <path d="M24 0H19.1992V4.80075H24V0Z" fill="currentColor" />
        <path d="M24 19.1992H19.1992V24H24V19.1992Z" fill="currentColor" />
        <path
          d="M4.80075 19.1992V14.4004V9.59962V4.80075V0H0V4.80075V9.59962V14.4004V19.1992V24H4.80075H9.59963H14.4004V19.1992H9.59963H4.80075Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_4284_33585">
          <rect width="28" height="28" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};
