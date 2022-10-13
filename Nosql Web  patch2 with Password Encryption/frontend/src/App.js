import { BrowserRouter as Router, Route } from "react-router-dom";
import EmpHome from "./Components/Employee/pages/EmpHome";
import Employee from "./Components/Employee/pages/Employee";
import Login from "./Components/Employee/pages/Login";


function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login}></Route>
        <Route path="/empregister" exact component={Employee}></Route>
        <Route path="/employees" exact component={EmpHome}></Route>
      </div>
    </Router>
  );
}

export default App;
