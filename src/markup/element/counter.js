import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = ({ count }) => {
  return (
    <CountUp end={count} redraw={true}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <h2 className="dlab-title counter" ref={countUpRef}>
            count
          </h2>
        </VisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
