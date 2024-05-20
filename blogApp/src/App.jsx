// import About from "./pages/about";
import Home from "./pages/home";
// import Contact from "./pages/contact";
const App = () => {
  const users = [{ name: "prabin" }, { name: "rabin" }, { name: "nabin" }];
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
