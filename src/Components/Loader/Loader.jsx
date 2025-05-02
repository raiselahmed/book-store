import React from "react";
import { Audio, MagnifyingGlass,FidgetSpinner } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />
    </div>
  );
};

export default Loader;
