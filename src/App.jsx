import "./App.css";
import HeadlineCard from "./Components/HeadlineCard";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Food from './Components/Food'
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HeadlineCard/>
      <Food/>
      <Categories/>
      <Footer/>
    </>
  );
}

export default App;
