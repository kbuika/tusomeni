import React from "react";
import Loader from "react-loader-spinner";

function Loaders() {
  return (
    <Loader
      type="Puff"
      color="white"
      height={100}
      width={100}
      timeout={300000}
    />
  );
}
export default Loaders;
