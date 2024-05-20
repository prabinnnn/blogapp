// import About from "./pages/about";
import Home from "./pages/home";
// import Contact from "./pages/contact";
const App = () => {
  const users = [
    { name: "prabin", age: "20" },
    { name: "rabin", age: "21" },
    { name: "nabin", age: "23" },
  ];
  return (
    // <>
    //   {/* <Home />
    //   <Contact />
    //   <br />
    //   <About title="about pra" description="it is about home page" />
    //   <br /> */}
    // </>

    <Home data={users} />
  );
};

export default App;
