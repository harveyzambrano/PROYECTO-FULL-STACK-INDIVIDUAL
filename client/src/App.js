import "./App.css";
import {Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import Form from "./components/Form/Form";
import { Link } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import SearchBar from "./components/Search/Seach";
 

function App() {
  return (
   
      <div className="App">
        
             
        <Switch>
          <Route exact path='/'     component={LandingPage}/>
          <Route exact path='/recipes' component={Home}/>
          <Route  path='/recipes/:id' component={Detail}/>   
          <Route exact path='/form' component={Form}/>
        </Switch>
      </div>
    
  );
}

export default App;
