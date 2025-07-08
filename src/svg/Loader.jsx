import * as React from "react";

const Loader = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width||"72"}
    height={props?.height||"72"}
    fill="none"
    viewBox="0 0 72 72"
  >
    <g
      clipPath={`url(#paint0_angular_1274_278_clip_path_${props?.width})`}
      data-figma-skip-parse="true"
    >
      <foreignObject
        width="2000"
        height="2000"
        x="-1000"
        y="-1000"
        transform="matrix(0 -.036 -.036 0 36 36)"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          opacity="1"
          style={{
            background:
              "conic-gradient(from 90deg,#16a34a 0deg,#65c287 137.085deg,#f2f9f5 180.645deg,#fff 360deg)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
    </g>
    <path
      d="M36 18c-9.941 0-18 8.059-18 18s8.059 18 18 18v18C16.118 72 0 55.882 0 36S16.118 0 36 0z"
      data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.086274512112140656,"g":0.63921570777893066,"b":0.29019609093666077,"a":1.0},"position":0.0},{"color":{"r":0.39727145433425903,"g":0.7620127797126770,"b":0.53178602457046509,"a":1.0},"position":0.38079223036766052},{"color":{"r":0.94961667060852051,"g":0.98010611534118652,"b":0.96086108684539795,"a":1.0},"position":0.50179159641265869},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":1.0},"position":1.0}],"stopsVar":[{"color":{"r":0.086274512112140656,"g":0.63921570777893066,"b":0.29019609093666077,"a":1.0},"position":0.0},{"color":{"r":0.39727145433425903,"g":0.7620127797126770,"b":0.53178602457046509,"a":1.0},"position":0.38079223036766052},{"color":{"r":0.94961667060852051,"g":0.98010611534118652,"b":0.96086108684539795,"a":1.0},"position":0.50179159641265869},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":1.0},"position":1.0}],"transform":{"m00":4.4087289869439595e-15,"m01":-72.000007629394531,"m02":72.000007629394531,"m10":-72.000007629394531,"m11":-4.4087289869439595e-15,"m12":72.000007629394531},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
    ></path>
    <g
      clipPath={`url(#paint1_angular_1274_278_clip_path_${props?.width})`}
      data-figma-skip-parse="true"
    >
      <foreignObject
        width="2000"
        height="2000"
        x="-1000"
        y="-1000"
        transform="matrix(0 .036 .036 0 36 36)"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          opacity="1"
          style={{
            background:
              "conic-gradient(from 90deg,#16a34a 0deg,#65c287 137.085deg,#f2f9f5 180.645deg,#fff 360deg)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
    </g>
    <path
      d="M36 54c9.941 0 18-8.059 18-18s-8.059-18-18-18V0c19.882 0 36 16.118 36 36S55.882 72 36 72z"
      data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.086274512112140656,"g":0.63921570777893066,"b":0.29019609093666077,"a":1.0},"position":0.0},{"color":{"r":0.39727145433425903,"g":0.7620127797126770,"b":0.53178602457046509,"a":1.0},"position":0.38079223036766052},{"color":{"r":0.94961667060852051,"g":0.98010611534118652,"b":0.96086108684539795,"a":1.0},"position":0.50179159641265869},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":1.0},"position":1.0}],"stopsVar":[{"color":{"r":0.086274512112140656,"g":0.63921570777893066,"b":0.29019609093666077,"a":1.0},"position":0.0},{"color":{"r":0.39727145433425903,"g":0.7620127797126770,"b":0.53178602457046509,"a":1.0},"position":0.38079223036766052},{"color":{"r":0.94961667060852051,"g":0.98010611534118652,"b":0.96086108684539795,"a":1.0},"position":0.50179159641265869},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":1.0},"position":1.0}],"transform":{"m00":-6.2944404817244504e-06,"m01":72.000007629394531,"m02":-1.3349539358387119e-06,"m10":72.000007629394531,"m11":6.2944404817244504e-06,"m12":-1.3923835467721801e-05},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
    ></path>
    <circle cx="36" cy="9" r="9" fill="#16A34A"></circle>
    <circle
      cx="36"
      cy="63"
      r="9"
      fill="#16A34A"
      transform="rotate(-180 36 63)"
    ></circle>
    <defs>
      <clipPath id={`paint0_angular_1274_278_clip_path_${props?.width}`}>
        <path d="M36 18c-9.941 0-18 8.059-18 18s8.059 18 18 18v18C16.118 72 0 55.882 0 36S16.118 0 36 0z"></path>
      </clipPath>
      <clipPath id={`paint1_angular_1274_278_clip_path_${props?.width}`}>
        <path d="M36 54c9.941 0 18-8.059 18-18s-8.059-18-18-18V0c19.882 0 36 16.118 36 36S55.882 72 36 72z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default Loader;