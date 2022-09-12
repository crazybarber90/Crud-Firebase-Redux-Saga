import "./App.css";
import Header from "./components/Header";
// import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import AddEdit from "./components/AddEdit";
import ListRecord from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path="/" element={<ListRecord />} />
        <Route path="/add" element={<AddEdit />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
