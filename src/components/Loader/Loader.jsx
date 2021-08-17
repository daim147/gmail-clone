import React from "react";
import Loader from "react-loader-spinner";
const LoaderSpinner = () => {
  return (
    <div
      style={{
        width: "100%",
        heigh: "100%",
        display: "flex",
        flex: "1",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader type="ThreeDots" color="#c04b37" height={80} width={80} />
    </div>
  );
};

export default LoaderSpinner;
