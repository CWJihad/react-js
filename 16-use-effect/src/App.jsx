import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const aChange = () => {
    console.log("a is changed");
  };

  const bChange = () => {
    console.log("b is changed");
  };

  useEffect(() => {
    console.log("UseEffect is running");
    bChange();
  }, [b]);

  return (
    <div>
      <div className="container">
        <h1>Use Effect</h1>
        <div className="content">
          <div className="first">
            <h2>a: {a}</h2>
            <button
              onClick={() => {
                setA(a + 1);
              }}
            >
              Change A
            </button>
          </div>

          <div className="second">
            <h2>b: {b}</h2>
            <button
              onClick={() => {
                setB(b + 1);
              }}
            >
              Change B
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            setA(0);
            setB(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
