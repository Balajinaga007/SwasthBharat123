import * as React from "react";

const CrossIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width||"6"}
    height={props?.height||"6"}
    fill="none"
    viewBox="0 0 6 6"
  >
    <path
      fill={props?.color||"#fff"}
      d="M5.035 6h-1.03a.3.3 0 0 1-.2-.065.6.6 0 0 1-.115-.145L2.515 3.905q-.045.17-.12.295L1.33 5.79a1 1 0 0 1-.125.145A.24.24 0 0 1 1.03 6H.07l1.765-2.63L.14.9h1.03q.125 0 .18.04.06.035.105.11l1.155 1.8q.045-.165.14-.315l.975-1.465q.1-.17.255-.17h.985L3.27 3.325z"
    ></path>
  </svg>
);

export default CrossIcon;
