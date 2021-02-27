import "./App.css";
import me from "../src/assets/images/Screen Shot 2021-02-26 at 7.56.24 PM.png";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Chris Lantier</h1>
          <h3 className="animated"> Coming Soon!</h3>
          <img className="img" alt="That's me Chris Lazntier" src={me} />
        </header>
      </div>
    </>
  );
}

export default App;
