import { useState } from "react";
import "../component/Login.css";
import { Link, useNavigate } from "react-router-dom";
import CustomAlert from "../component/CustomAlert";
import Nav from "./Nav";
const Login = () => {
  const [show, setShow] = useState(false);
  const togglePassword = () => setShow(!show);
  const [clientEmailError, setClientEmailError] = useState("");
  const [clientPasswordError, setClientPasswordError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [navigation, setNavigation] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [inputBorder, setInputBorder] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const Api_Url = "http://localhost:8080/login";
    if (loginFormData.email === "" || loginFormData.password === "") {
      setClientEmailError("Enter Your Email");
      setClientPasswordError("Enter Your Password");
      setInputBorder(true);
      return;
    } else {
      try {
        const request = await fetch(Api_Url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginFormData),
        });
        if (!request.ok) throw Error("Data Not Found");
        const data = await request.text();
        console.log(data);
        if (data == 1) {
          setShowAlert(true);
          setAlertMessage("Login SuccessFully ✅");
          setNavigation(true);
        } else if (data == 2) {
          setInputBorder(true);
          setShowAlert(true);
          setClientPasswordError("Your Password is Incorrect");
          setAlertMessage("Your Password is Incorrect ❌");
        } else if (data == 3) {
          setShowAlert(true);
          setInputBorder(true);
          setClientEmailError("Enter Valid Email");
          setAlertMessage("Your Email is Invalid ❌");
        }
      } catch (err) {
        alert(err);
      }
    }
  };
  return (
    <>
      <Nav />
      <div
        className="container d-flex justify-content-center align-items-center "
        style={{ marginTop: "90px" }}
      >
        <div className="row border rounded-4 shadow-lg p-4">
          <div className="col d-flex">
            <div className="image">
              <img
                src="./src/assets/LoginPage2.jpeg"
                className="img-fluid mx-4 pt-5"
                style={{ width: "20rem", borderRadius: "10px 0px 0px 10px" }}
              />
            </div>
            <div className="col">
              <div style={{ width: "20rem" }} className="p-3">
                <p
                  className="text-center fs-3 fw-bold"
                  style={{ color: "#111827", marginTop: "30px" }}
                >
                  LOGIN
                </p>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control mt-4 "
                      placeholder=""
                      name="email"
                      value={loginFormData.email}
                      onChange={handleChange}
                      style={
                        !loginFormData.email && inputBorder
                          ? { border: "2px solid #dd0d0d" }
                          : { border: "2px solid #7e7d7dff" }
                      }
                    />
                    <label
                      htmlFor="floatingInput"
                      style={
                        !loginFormData.email && inputBorder
                          ? { color: "#dd0d0d" }
                          : { color: " #7e7d7dff" }
                      }
                    >
                      Email
                    </label>
                    <p>
                      {!loginFormData.email && (
                        <span
                          style={{
                            color: "#dd0d0d",
                            fontSize: "12px",
                            fontWeight: "500",
                          }}
                        >
                          {clientEmailError}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="form-floating mt-3">
                    <input
                      type={show ? "text" : "password"}
                      className="form-control z-0 rounded-2 "
                      placeholder="Enter Your Password"
                      name="password"
                      value={loginFormData.password}
                      onChange={handleChange}
                      style={
                        !loginFormData.password && inputBorder
                          ? { border: "2px solid #dd0d0d" }
                          : { border: "2px solid #7e7d7dff" }
                      }
                    />
                    <label
                      htmlFor="floatingInput"
                      style={
                        !loginFormData.password && inputBorder
                          ? { color: "#dd0d0d" }
                          : { color: " #7e7d7dff" }
                      }
                    >
                      Password
                    </label>
                    <p>
                      {!loginFormData.password && (
                        <span
                          style={{
                            color: "#dd0d0d",
                            fontSize: "12px",
                            fontWeight: "500",
                          }}
                        >
                          {clientPasswordError}
                        </span>
                      )}
                    </p>
                    {loginFormData.password && (
                      <i
                        className={`fa-solid ${show ? "fa-eye" : "fa-eye-slash"} position-absolute z-1 passwordeye`}
                        onClick={togglePassword}
                      ></i>
                    )}
                  </div>

                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <button
                      className="btn text-white form-control border rounded-3 fw-bold mt-2 py-3"
                      id="loginbtn"
                      type="submit"
                      onClick={handleSubmit}
                      // style={{backgroundColor:"#22C55E"}}
                    >
                      LOGIN
                    </button>

                    {/* <button
                      className="btn text-black mt-3 form-control  border rounded-3 "
                      style={{ border: "1px solid #22C55E" }}
                    >
                      Sign-in With Google{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                        style={{ paddingLeft: "10px" }}
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                      </svg>
                    </button> */}
                    <p className="pt-3" style={{ fontSize: "13px" }}>
                      Don't Have Account{" "}
                      <Link
                        to="/register"
                        style={{ color: "#dd0d0d", textDecoration: "none" }}
                      >
                        Register?
                      </Link>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAlert && (
        <CustomAlert
          message={alertMessage}
          onClose={() => {
            setShowAlert(false);
            {
              navigation ? navigate("/studentdashboard") : "";
            }
          }}
        />
      )}
    </>
  );
};

export default Login;
/*
| Element                 | Color         | Hex       |
| ----------------------- | ------------- | --------- |
| **Navbar / Header**     | Light Blue    | `#3B82F6` |
| **Home Background**     | Off-White     | `#F9FAFB` |
| **Buttons**             | Green         | `#22C55E` |
| **Hover Button**        | Dark Green    | `#15803D` |
| **Text / Headings**     | Grayish Black | `#111827` |
| **Accent / Highlights** | Yellow        | `#FACC15` |





*/
