import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SelectDepartment from "./components/SelectDep";
import SelectClass from "./components/SelectClass";
import SelectSubject from "./components/SelectSubject";
import Students from "./components/Students.js";
import AddStudent from "./components/addStudent";
import Attandence from "./components/Attandence";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Route exact path="/subjects" component={SelectSubject} />
        <Navbar />
        <Route exact path="/" component={Login} />
        <Route exact path="/department" component={SelectDepartment} />
        <Route exact path="/batches" component={SelectClass} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/addstudents" component={AddStudent} />
        <Route exact path="/attendance" component={Attandence} />
      </Router>
    </GlobalProvider>
  );
}

export default App;
