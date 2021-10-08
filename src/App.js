import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import Index from "./components/Index";
import ListaPokemon from "./components/ListaPokemon";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Index></Index>
        </Route>
        <Route exact path="/lista-pokemon">
          <ListaPokemon></ListaPokemon>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
