import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Progress = ({ progress }) => {
  return (
    <div>
      <ProgressBar
        animated
        variant="success"
        now={progress}
        label={`${progress}%`}
      />
    </div>
  );
};

export default Progress;
