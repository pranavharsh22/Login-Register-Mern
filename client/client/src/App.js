// import logo from "./logo.svg";
import "./App.css";

import Signup from "./components/signup/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Router>
        <Routes>
          {user && <Route exact path="/" element={<Main />} />}
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
