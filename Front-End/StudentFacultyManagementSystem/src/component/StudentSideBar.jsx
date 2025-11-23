import "../component/StudentSideBar.css";
import { Link } from "react-router-dom";
const StudentSideBar = () => {
  return (
    <>
      <div
        className="container-fluid  d-flex flex-column align-items-center text-center"
        style={{
          backgroundColor: "#56007F",
          borderRadius: "0px 50px 50px 0px",
        }}
      >
        <div style={{ marginTop: "100px" }}>
          <ul className="m-0 p-0">
            <li className="list-unstyled pt-4 pb-1">
              <Link
                to="/studentdashboard"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "17px",
                }}
              >
                <i
                  class="fa-solid fa-house-user"
                  style={{ paddingRight: "30px", color: "white" }}
                ></i>
                HOME
              </Link>
            </li>
            <li className="list-unstyled pt-4 pb-1">
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "17px",
                }}
              >
                <i
                  class="fa-solid fa-book-open"
                  style={{ paddingRight: "30px", color: "white" }}
                ></i>
                COURSE
              </Link>
            </li>
            <li className="list-unstyled pt-4 pb-1">
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "17px",
                }}
              >
                <i
                  class="fa-solid fa-star"
                  style={{ paddingRight: "30px", color: "white" }}
                ></i>
                GRADE
              </Link>
            </li>
            <li className="list-unstyled pt-4 pb-1">
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "17px",
                }}
              >
                <i
                  className="fa-solid fa-comment"
                  style={{ paddingRight: "30px", color: "white" }}
                ></i>
                CHATS
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "205px", marginBottom: "100px" }}>
          <ul className="m-0 p-0">
            <li className="list-unstyled pt-4 pb-1">
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "17px",
                }}
              >
                <i
                  class="fa-solid fa-gear"
                  style={{ paddingRight: "30px", color: "white" }}
                ></i>
                SETTINGS
              </Link>
            </li>
            <li className="list-unstyled pt-4 pb-1">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "17px",
                }}
              >
                <i
                  class="fa-solid fa-right-from-bracket"
                  style={{ paddingRight: "30px", color: "white" }}
                ></i>
                LOGOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StudentSideBar;

{
  /* <div style={{padding:"50px 10px 30px 100px"}}>
              <ul className="m-0 p-0">
                <li className="list-unstyled pt-4 pb-1">
                  <Link
                    to="/studentdashboard"
                    style={{ textDecoration: "none", color: "white",fontSize:"18px" }}
                  >
                    HOME
                  </Link>
                </li>
                <li className="list-unstyled pt-4 pb-1">
                  <Link
                    to=""
                    style={{ textDecoration: "none", color: "white",fontSize:"18px" }}
                  >
                    COURSE
                  </Link>
                </li>
                <li className="list-unstyled pt-4 pb-1">
                  <Link
                    to=""
                    style={{ textDecoration: "none", color: "white",fontSize:"18px" }}
                  >
                    GRADE
                  </Link>
                </li>
                <li className="list-unstyled pt-4 pb-1">
                  <Link
                    to=""
                    style={{ textDecoration: "none", color: "white",fontSize:"18px" }}
                  >
                    CHATS
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{margin:"175px"}}>
              <ul className="m-0 p-0">
                <li className="list-unstyled pt-4 pb-1">
                  <Link
                    to=""
                    style={{ textDecoration: "none", color: "white",fontSize:"18px" }}
                  >
                    SETTINGS
                  </Link>
                </li>
                <li className="list-unstyled pt-4 pb-1">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white",fontSize:"18px" }}
                  >
                    LOGOUT
                  </Link>
                </li>
              </ul>
            </div> */
}
