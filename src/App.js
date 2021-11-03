import React,{ useState } from "react";

import { BrowserRouter as Router , Switch, Route, Redirect} from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/">
          {user.email ? <Redirect to="/home" /> :  <LoginPage user={user} setUser={setUser}/>}
          </Route>

        
        <Route path="/home">
          {user.email ? 
            <HomePage user={user} setUser={setUser} />:
            <Redirect to="/"/>} 
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
