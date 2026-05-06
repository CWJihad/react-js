import React from "react";

const UseState = () => {
  const [num, setNum] = useState(20); // usf
  const [username, setUsername] = useState("Jihad");
  const [users, setUsers] = useState(["Ahad ", "Jihad ", "Sabbir"]);

  return (
    <div>
      <h1>
        The username is {username} and age is {num}
      </h1>
      <button
        onClick={() => {
          setNum(22);
          setUsername("Samiul");
          setUsers(["Jihad ", "Samiul ", "Sohan "]);
        }}
      >
        Click Me
      </button>
      <h2>{users}</h2>
    </div>
  );
};

export default UseState;
