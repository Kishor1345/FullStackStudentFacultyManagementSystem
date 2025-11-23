import "../component/Home.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";
const Home = () => {
  return (
    <>
      <Nav />
      <div className="container homecontainer ">
        <div className="row">
          <div className="col-6 d-flex justify-content-center flex-column textcontainer">
            <p className="fs-1  fw-semibold">
              <span
                style={{
                  color: "#56007F",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Welcome to Student and Faculty
              </span>{" "}
              <span
                style={{
                  color: "#000000ff",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Management System
              </span>
            </p>
            <div style={{ marginTop: "15px" }}>
              <button
                type="button"
                className="btnlogin rounded-3"
                id="btnlogin"
              >
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    padding: "20px 40px 20px 40px",
                  }}
                >
                  LOGIN
                </Link>
              </button>
            </div>
          </div>
          <div className="col-6 mt-4  d-flex justify-content-center">
            <img
              src="./src/assets/home-image.jpg"
              alt=""
              style={{ width: "35rem" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex gap-1 justify-content-end mt-5"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
