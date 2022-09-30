import React from "react";

const ErrorMessage = ({ msg }) => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-md-4">
        <h2 className="bg-danger text-center text-white mt-5">{msg}</h2>
      </div>
    </div>
  );
};

export default ErrorMessage;
