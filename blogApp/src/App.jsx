import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
const App = () => {
  return (
    <>
      <Home />
      <Contact />
      <br />
      <About title="about pra" description="it is about home page" />
      <br />
    </>
  );
};

export default App;
