import About from "./components/About";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Time from "./components/Time";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Work />
      <Project />
      <Time />
      <Portfolio />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
