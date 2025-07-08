import * as React from "react";

const Stage1 = ({width,height}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width||"11"}
    height={height||"29"}
    fill="none"
    viewBox="0 0 11 29"
  >
    <path
      fill="currentcolor"
      d="M1.375 3.5A2.74 2.74 0 0 1 4.125.75a2.74 2.74 0 0 1 2.75 2.75 2.74 2.74 0 0 1-2.75 2.75 2.74 2.74 0 0 1-2.75-2.75M11 15.875a4.43 4.43 0 0 0-.758-2.474A4.43 4.43 0 0 0 8.25 11.75a4.12 4.12 0 0 0-4.125-4.125A4.12 4.12 0 0 0 0 11.75v9.625h2.75v6.875h4.125v-6.875H11z"
    ></path>
  </svg>
);

export default Stage1;
