import React, { useEffect, useMemo, useState } from "react";
import { useSpring, animated } from "react-spring";
function QuizzAnswer({ data, index, couleur, clic }) {

  const [proposition, setProposition]= useState(data)
  const c2Style = {
    borderRadius: 20,
    width: 250,
    marginTop: 10,
    padding: 8,
    cursor: "pointer",
  };
  const test = useSpring({
    opacity: 1,
    from: { opacity: 1, marginRight: 250, marginLeft: -250 },
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 25,

    config: { duration: 1000 },
  });

  const [letter] = useState(["A", "B", "C", "D"]);

  useEffect(() => {
    const copydata = [...data]
     const shuffle = copydata.sort(function (a, b) {
      return 0.5 - Math.random();})
      setProposition(shuffle)
  }, [index]);


  return (
    <div className="row">
      <div className="col-12">
        <div className="justify-content-center text-center">
          <animated.div style={test}>
            {proposition.map((quizz, idx) => (
              <div
                key={idx}
                style={{ ...c2Style, ...couleur[idx] }}
                onClick={() => clic(quizz, idx,proposition)}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {letter[idx] + "."}
                  </span>
                  {" " + quizz.proposition}
                </p>
              </div>
            ))}
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(QuizzAnswer);
