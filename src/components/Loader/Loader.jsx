import React from "react";
import Loader from "react-loader-spinner";
const LoaderSpinner = ({ height = 100, width = 100 }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flex: "1",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader type="ThreeDots" color="#c04b37" height={height} width={width} />
    </div>
  );
};

export default LoaderSpinner;
