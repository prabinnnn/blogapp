// import { useState } from "react";

// function Button() {
//   const [person, setPerson] = useState("prabin");
//   const [color, setColor] = useState("red");
//   const [temp, setTemp] = useState("");
//   return (
//     <div>
//       Person:{person}
//       <input
//         type="text"
//         placeholder="Enter a Name"
//         onChange={(e) => setTemp(e.target.value)}
//       />
//       <button onClick={setPerson(temp)}>change</button>
//       Color:{color}
//       <button onClick={setColor("white")}>color</button>
//     </div>
//   );
// }

// export default Button;
import { useState } from "react";
function Button() {
  const [car, setCar] = useState({
    name: "bmw",
    model: "23",
    year: 2001,
  });
  return (
    <div>
      {car.name}
      <button onClick={setCar()}>change</button>
    </div>
  );
}
export default Button;
