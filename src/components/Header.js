import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "./Korina Claudia.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import Alert from "./Alert";
export default function Header({ showAlert }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [openProfile, setOpenProfile] = useState(false);
  // useAuth0 parameters
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top"
          data-bs-theme="dark"
          style={{
            backgroundColor: "#00050d",
            fontFamily: "Arial",
          }}
        >
          <div className="container-fluid">
            <Link className="nav-link active" aria-current="page" to="/cinequest">
              <img
                style={{ height: "60px", width: "60px", borderRadius: "50%" }}
                src={Logo}
                alt=""
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active custom"
                    style={{
                      fontSize: "25px",
                      margin: "10px 15px",
                      fontWeight: "bold",
                    }}
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active custom"
                    style={{
                      fontSize: "25px",
                      margin: "10px 15px",
                      fontWeight: "bold",
                    }}
                    aria-current="page"
                    to="/movies/popular"
                  >
                    Popular
                  </Link>
                </li>
                <li className="nav-item  custom">
                  <Link
                    className="nav-link active"
                    style={{
                      fontSize: "25px",
                      margin: "10px 15px",
                      fontWeight: "bold",
                    }}
                    aria-current="page"
                    to="/movies/top_rated"
                  >
                    Top Rated
                  </Link>
                </li>
                <li className="nav-item custom">
                  <Link
                    className="nav-link active"
                    style={{
                      fontSize: "25px",
                      margin: "10px 15px",
                      fontWeight: "bold",
                    }}
                    aria-current="page"
                    to="/movies/upcoming"
                  >
                    Upcoming
                  </Link>
                </li>

                <li>
                  <Link
                    className="nav-link active custom"
                    aria-current="page"
                    style={{
                      fontSize: "25px",
                      margin: "10px 15px",
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                    to="/movie/search"
                  >
                    Search Movies
                  </Link>
                </li>

                {isAuthenticated ? (
                  <div
                    className="user_info"
                    style={{
                      position: "absolute",
                      right: "30px",
                      display: "flex",
                      bottom: "15px",
                    }}
                  >
                    <div className="hover1" style={{ textAlign: "center" }}>
                      <img
                        className="profile_picture"
                        onClick={() => {setOpenProfile((prev) => !prev);  window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });}}
                        style={{
                          height: "40px",
                          borderRadius: "50%",
                          margin: "5px",
                        }}
                        src={user.picture}
                        alt={user.name}
                      />
                    </div>

                    <div className="msg">
                      {/* <p>{user.email}</p> */}
                      {showAlert && <Alert />}
                    </div>
                  </div>
                ) : (
                  <div
                    className="user_info"
                    style={{
                      position: "absolute",
                      right: "30px",
                      display: "flex",
                      bottom: "15px",
                    }}
                  >
                    <button
                      style={{
                        fontSize: "2rem",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                      onClick={() => loginWithRedirect()}
                      type="button"
                      class="btn btn-primary"
                    >
                      {" "}
                      Log In{" "}
                    </button>
                  </div>
                )}
                {/* Alert for 3 seconds when "Add to Favorites" button is clicked */}
              </ul>
            </div>
          </div>
        </nav>

        {openProfile && (
          <div className="profile_click" style={{ color: "black" }}>
            <ul style={{ listStyle: "none", paddingLeft: "0rem" }}>
              {/* <div style={{padding: "10px", fontSize: "1.5rem"}}>
                <p style={{ marginBottom: "-7px" }}>Welcome,</p>
                <p> {user.name}</p>
              </div> */}

              <Link
              className = "view_profile_btn"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderBottom: "3px solid black",
                  color: "#BBBBBB"
                }}
                to="/movies/profile"
              >
                <li> <i class="fa-solid fa-user"></i>View Profile </li>
              </Link>
              <Link
              className = "view_profile_btn"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderBottom: "3px solid black",
                 color: "#BBBBBB"
                }}
                to="/movies/help"
              >
                <li><i class="fa-solid fa-circle-info"></i>Help</li>
              </Link>
              
              {/* <br /> */}
              <hr />
              {isAuthenticated && (
                <button
                  className="logout_btn1"
                  style={{
                    fontSize: "20px",
                    padding: "8px",
                    backgroundColor: "#1f2837",
                    color: "black",
                    border: "none",
                    borderRadius: "0px",
                    fontWeight: "bold",
                    color: "red"
                  }}
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: "http://thunderbird7413.github.io/cinequest" },
                    })
                  }
                  type="button"
                  class="btn btn-primary"
                >
                  {" "}
                  <i class="fa-solid fa-right-from-bracket">Log Out </i>
                </button>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
