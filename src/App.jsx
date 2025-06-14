import "./App.css";
import HeadlineCard from "./Components/HeadlineCard";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Food from './Components/Food'
import Categories from "./Components/Categories";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HeadlineCard/>
      <Food/>
      <Categories/>
    </>
  );
}

export default App;
