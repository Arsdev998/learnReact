import React, { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
const Loading = () => {
  let [color, setColor] = useState("#ee2e2a");
  return (
    <div className="min-h-screen flex items-center justify-center">
      <BeatLoader
        color={color}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
