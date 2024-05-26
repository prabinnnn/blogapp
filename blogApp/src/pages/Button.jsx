import { useState } from "react";

function Button() {
  const [person, setPerson] = useState("prabin");
  const [color, setColor] = useState("red");
  const [temp, setTemp] = useState("");
  return (
    <div>
      Person:{person}
      <input
        type="text"
        placeholder="Enter a Name"
        onChange={() => setTemp()}
      />
      <button onClick={setPerson("Admin")}>change</button>
      Color:{color}
      <button onClick={setColor("white")}>change</button>
    </div>
  );
}

export default Button;
