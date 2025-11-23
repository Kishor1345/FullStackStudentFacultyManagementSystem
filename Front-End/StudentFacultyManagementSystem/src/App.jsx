import Home from "./component/Home";
import Login from "./component/Login";
import Nav from "./component/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import StudentDashboard from "./component/StudentDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/studentdashboard" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
