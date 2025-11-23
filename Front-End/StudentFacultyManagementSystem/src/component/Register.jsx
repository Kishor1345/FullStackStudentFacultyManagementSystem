import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../component/Register.css";
import CustomAlert from "../component/CustomAlert";
import Nav from "./Nav";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const togglePassword = () => setShowPassword(!showPassword);
  const [clientNameError, setClientNameError] = useState("");
  const [navigation, setNavigation] = useState(false);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [clientEmailError, setClientEmailError] = useState("");
  const [clientPasswordError, setClientPasswordError] = useState("");
  const [clientConfirmPasswordError, setClientConfirmPasswordError] =
    useState("");
  const [clientMemberError, setClientMemberError] = useState("");
  const toggleConfirmPassword = () => setConfirmShow(!confirmShow);
  const [showAlert, setShowAlert] = useState(false);
  const [inputBorder, setInputBorder] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    member: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };
  const handleSubmit = async() => {
    if (
    registerFormData.name.trim() === "" ||
    registerFormData.email.trim() === "" ||
    registerFormData.password.trim() === "" ||
    confirmPasswordValue.trim() === "" ||
    registerFormData.member === ""
  ) {
    setClientNameError("Please Enter Your Name");
    setClientEmailError("Please Enter Your Email");
    setClientPasswordError("Please Enter Your Password");
    setClientConfirmPasswordError("Please Enter Confirm Password");
    setClientMemberError("Please Select Member");
    setInputBorder(true);
    return;
  }

  // Step 2: Password match validation
  if (registerFormData.password !== confirmPasswordValue) {
    setConfirmError("Passwords do not match");
    setInputBorder(true);
    return;
  }

  // Step 3: Clear error borders
  setInputBorder(false);

  // Step 4: API CALL
  const Api_Url = "http://localhost:8080/register";

  try {
    const request = await fetch(Api_Url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registerFormData),
    });

    if (!request.ok) throw Error("Data Not Found");

    const data = await request.text();

    setAlertMessage(data + " ✅");
    setNavigation(true);
    setShowAlert(true);
  } catch (error) {
    alert(error);
  }
  };
  return (
    <>
      <Nav />
      <div
        className="container d-flex justify-content-center align-items-center py-2 "
        style={{ marginTop: "37px" }}
      >
        <div className="row border rounded-4 shadow-lg px-4">
          <div className="col d-flex">
            <div className="">
              <img
                src="./src/assets/LoginPage2.jpeg"
                className="mx-4 mt-3"
                style={{
                  width: "20rem",
                  paddingTop: "100px",
                  borderRadius: "10px 0px 0px 10px",
                }}
              />
            </div>
            <div className="">
              <div style={{ width: "20rem" }} className="p-3">
                <p
                  className="text-center fs-3 fw-bold mt-1"
                  style={{ color: "#111827" }}
                >
                  REGISTER
                </p>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Enter Your Name"
                      name="name"
                      value={registerFormData.name}
                      onChange={handleChange}
                      style={
                        !registerFormData.name && inputBorder
                          ? { border: "2px solid #dd0d0d" }
                          : { border: "2px solid #7e7d7dff" }
                      }
                    />
                    <label htmlFor="floatingInput">Name</label>
                    <p>
                      {!registerFormData.name && (
                        <span
                          style={{
                            color: "#dd0d0d",
                            fontSize: "13px",
                            fontWeight: "500",
                            margin: "0px",
                          }}
                        >
                          {clientNameError}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      name="email"
                      value={registerFormData.email}
                      onChange={handleChange}
                      style={
                        !registerFormData.email && inputBorder
                          ? { border: "2px solid #dd0d0d" }
                          : { border: "2px solid #7e7d7dff" }
                      }
                    />
                    <label htmlFor="floatingInput">Email</label>
                    <p>
                      {!registerFormData.email && (
                        <span
                          style={{
                            color: "#dd0d0d",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                        >
                          {clientEmailError}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="form-floating">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control z-0"
                      placeholder="Enter Your Password"
                      value={registerFormData.password}
                      onChange={handleChange}
                      name="password"
                      style={
                        !registerFormData.password && inputBorder
                          ? { border: "2px solid #dd0d0d" }
                          : { border: "2px solid #7e7d7dff" }
                      }
                    />
                    <label htmlFor="floatingInput">Password</label>
                    <p>
                      {!registerFormData.password && (
                        <span
                          style={{
                            color: "#dd0d0d",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                        >
                          {clientPasswordError}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="form-floating">
                    <input
                      type={confirmShow ? "text" : "password"}
                      className="form-control z-0 rounded-1"
                      value={confirmPasswordValue}
                      placeholder="Enter Your Password"
                      onChange={(e) => {
                        setConfirmPasswordValue(e.target.value);

                        // Remove mismatch error when user corrects password
                        if (registerFormData.password === e.target.value) {
                          setConfirmError("");
                          setClientConfirmPasswordError("");
                          setInputBorder(false);
                        }
                      }}
                      name="confirmPassword"
                      style={
                        (!confirmPasswordValue && inputBorder) || confirmError
                          ? { border: "2px solid #dd0d0d" }
                          : { border: "2px solid #7e7d7dff" }
                      }
                    />
                    <label htmlFor="floatingInput">ConfirmPassword</label>
                    <p>
                      {!confirmPasswordValue ? (
                        <span
                          style={{
                            color: "#dd0d0d",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                        >
                          {clientConfirmPasswordError}
                        </span>
                      ) : (
                        <span
                          style={{
                            color: "#dd0d0d",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                        >
                          {confirmError}
                        </span>
                      )}
                    </p>
                    {registerFormData.password && (
                      <i
                        className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"} position-absolute z-1 passwordeye1`}
                        onClick={togglePassword}
                      ></i>
                    )}
                    {confirmPasswordValue && (
                      <i
                        className={`fa-solid ${confirmShow ? "fa-eye" : "fa-eye-slash"} position-absolute z-1 passwordeye2`}
                        onClick={toggleConfirmPassword}
                      ></i>
                    )}
                  </div>
                  <div className="input-control">
                    <select
                      name="member"
                      className="form-select "
                      value={registerFormData.member}
                      onChange={handleChange}
                      style={
                        !registerFormData.member && inputBorder
                          ? { border: "2px solid #dd0d0d" }
                          : { border: "2px solid #7e7d7dff" }
                      }
                    >
                      <option value="">Student or Faculty</option>
                      <option value="1">Student</option>
                      <option value="2">Faculty</option>
                    </select>
                    <p>
                      {!registerFormData.member && (
                        <span
                          style={{
                            color: "#dd0d0d",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                        >
                          {clientMemberError}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <button
                      className="btn text-white form-control mb-1  border rounded-3  fw-bold py-3 "
                      type="button"
                      id="registerbtn"
                      onClick={handleSubmit}
                    >
                      Register
                    </button>
                    {/* <button
                    className="btn text-black mt-2 form-control border rounded-3"
                    style={{ border: "1px solid #22C55E", fontSize: "14px" }}
                  >
                    Sign-in With Google
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                      style={{paddingLeft:"10px"}}
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
                      Do you Have Already Account{" "}
                      <Link
                        to="/login"
                        style={{ color: "#dd0d0d", textDecoration: "none" }}
                      >
                        Login?
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
              navigation ? navigate("/login") : "";
            }
          }}
        />
      )}
    </>
  );
};

export default Register;
// i className="fa-brands fa-google"></i>

/*
   if (
      registerFormData.name === "" ||
      registerFormData.email === "" ||
      registerFormData.password === "" ||
      registerFormData.member === "" ||
      confirmPassword === ""
    ) {
      setClientNameError("Please Enter Your Name");
      setClientEmailError("Please Enter Your Email");
      setClientPasswordError("Please Enter Your Password");
      setClientConfirmPasswordError("Please Enter Confirm Password");
      setClientMemberError("Please Select Member");
      setInputBorder(true);
      return;
    }
    if (registerFormData.password !== confirmPassword) {
      setClientConfirmPasswordError("Your Password is Not Matched");
      setInputBorder(true);
      return;
    }

    registerFormData.name.trim();
    const Api_Url = "http://localhost:8080/register";
    try {
      const request = await fetch(Api_Url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(registerFormData),
      });
      if (!request.ok) throw Error("Data Not Found");
      const data = await request.text();
      console.log(data);
      setAlertMessage(data + "✅");
      setNavigation(true);
      setShowAlert(true);
    } catch (err) {
      alert(err);
    }





*/


