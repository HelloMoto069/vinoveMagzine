import React from "react";
import Lottie from "lottie-react";
import Animation404 from "../lottieFiles/Animation404.json";

const NoMatch = () => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "25%",
        height: "40%",
        width: "40%",
      }}
    >
      <Lottie animationData={Animation404} loop={true} autoplay />
    </div>
  );
};

export default NoMatch;
