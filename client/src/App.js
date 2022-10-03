import "./App.css";
import {Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
   
      <div className="App">
        <h1 className="Tittle_Henry">Henry Food</h1>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    
  );
}

export default App;
