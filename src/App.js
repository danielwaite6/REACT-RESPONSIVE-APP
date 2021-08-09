import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <NavBar />
      </Router>

    </div>
  );
}

export default App;
