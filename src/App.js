import "./App.scss";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="App">
      <Hero>
        Synthwave
        <span className="description">The 80's never left</span>
      </Hero>
    </div>
  );
}

export default App;
