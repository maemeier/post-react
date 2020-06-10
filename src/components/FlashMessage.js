import React from "react";

const FlashMessage = props => {
  return (
    <div className="floating-alerts">
      {props.messages.map((message, index) => {
        return (
          <div
            key={index}
            className="alert alert-success text-center floating-alert shadow-sm"
          >
            {message}
          </div>
        );
      })}
    </div>
  );
};

export default FlashMessage;
