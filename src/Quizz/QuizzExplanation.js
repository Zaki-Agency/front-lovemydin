import React from "react";
import { useSpring, animated } from "react-spring";

function QuizzExplanation(props) {
  const anim = useSpring({
    color: "black",
    opacity: 0.8,
    zIndex: "1",
    from: { opacity: 0 },
    config: { duration: 2000 },
  });
  if (props.explanation.length > 0) {
    return (
      <div className="row justify-content-center">
        <div className="col-6 d-flex justify-content-center ">
          <animated.div style={anim}>
            <div style={{ margin: 25 }}>
              <p>
                <span style={{ color: "#36ab9d" }}>Note ! </span>
                {props.explanation}
              </p>
            </div>
          </animated.div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default QuizzExplanation;
