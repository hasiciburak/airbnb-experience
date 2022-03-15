import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section>
        <Card />
      </section>
    </div>
  );
}

export default App;
