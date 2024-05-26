// import About from "./pages/about";
import Button from "./pages/Button";
import Home from "./pages/home";
// import Contact from "./pages/contact";
const App = () => {
  const users = [
    { name: "prabin", age: "20" },
    { name: "rabin", age: "21" },
    { name: "nabin", age: "23" },
  ];
  return (
    <div>
      <Home data={users} />
      <Button />
    </div>
  );
};

export default App;
