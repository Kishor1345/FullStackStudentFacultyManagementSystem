import "../component/Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="Navbar  sticky-top  shadow-lg p-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h2 className="text-white mt-2 px-3 fw-bold">ManagementSystem</h2>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end mt-2 px-5">
              <ul className="d-flex column-gap-5">
                <li className="list-unstyled mt-1">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    HOME
                  </Link>
                </li>
                <li className="list-unstyled mt-1">
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    REGISTER
                  </Link>
                </li>
                <li className="list-unstyled mt-1">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
