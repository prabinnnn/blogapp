import { useState } from "react";

function Button() {
  const [person, setPerson] = useState("prabin");
  const [color, setColor] = useState("red");
  return (
    <div>
      Person:{person}
      <button onClick={setPerson("Admin")}>change</button>
      Color:{color}
      <button onClick={setColor("white")}>change</button>
    </div>
  );
}

export default Button;
