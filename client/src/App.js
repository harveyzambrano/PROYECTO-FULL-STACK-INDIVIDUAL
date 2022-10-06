import "./App.css";
import {Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import Form from "./components/Form/Form";
import { Link } from "react-router-dom";
 

function App() {
  return (
   
      <div className="App">
        
             
        <Switch>
          <Route exact path='/'     component={LandingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/form' component={Form}/>
        </Switch>
      </div>
    
  );
}

export default App;
