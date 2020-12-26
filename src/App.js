import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PersonalInfo from "./view_pages/PersonalInfo";
import Home from "./view_pages/Home";

function App() {
  return (
   <Router>
     <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={PersonalInfo}/>
      </Switch>
   </Router>
  );
}

export default App;
