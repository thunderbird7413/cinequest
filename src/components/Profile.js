import React, { useState } from "react";
import "./Profile.css";
import { useAuth0 } from "@auth0/auth0-react";
// import movie_data from "./movie_data.json";
// import Popular from "./popular";
import { Link } from "react-router-dom";

export default function Profile({ favorites, onRemoveFromFavorites }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const source1 = "https://www.themoviedb.org/";
  const source2 = "https://image.tmdb.org/t/p/original"
  return (
    isAuthenticated && (
      <>
        <div className="bahar1">
          <div className="box1">
            <div className="upar_ka_section">
              <div className="image_box">
                <img className="profile_img" src={user.picture} alt="" />
              </div>
              <div className="name_box">
                <h2 style={{ textAlign: "center" }}>{user.name}</h2>
              </div>
            </div>
            <div className="fav_box1">
              <div className="heading">
                <h2
                  style={{
                    textAlign: "center",
                    marginTop: "28px",
                    marginBottom: "30px",
                    backgroundColor: "#36454f",
                    width: "60vh",
                    padding: "10px 10px",
                    borderRadius: "15px",
                  }}
                >
                  My Favourites...
                </h2>
              </div>

              <div className="contents">
                {favorites &&
                  favorites.map((movie) => {
                    return (
                      <div
                        className="card"
                        key={movie.id}
                        style={{
                          width: "12rem",
                          border: "none",
                          backgroundColor: "black",
                        }}
                      >
                        <img
                           src={`https://image.tmdb.org/t/p/original${
                            movie ? movie.poster_path : ""
                          }`}
                          className="card-img-top image"
                          alt="..."
                        />

                        <div className="card-body">
                          <h5
                            className="card-title"
                            style={{ color: "#fccb06" }}
                          >
                            {movie.name || movie.original_title}
                          </h5>
                          <p className="card-text" style={{ color: "#e5f4e3" }}>
                            {movie.release_date}
                          </p>
                          <p className="card-text" style={{ color: "#ff7f11" }}>
                            {movie.vote_average}{" "}
                            <i className="fa-solid fa-star"></i>
                          </p>
                          <button
                            className="button-5"
                            onClick={() => onRemoveFromFavorites(movie.id)}
                            role="button"
                          >
                            Remove from Favorites
                          </button>
                          <div
                            className="view_btn"
                            style={{ textAlign: "center" }}
                          >
                            <Link
                              to={`/movies/${movie.id}`}
                              className="btn btn-primary"
                            >
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="footer_Section">
          <h1 style= {{textAlign: "center", display: "block", backgroundColor: "#031d33", color: "white", padding: "15px", borderRadius: "15PX"}}>Hello, {user.name}</h1>
          <div className="line1 foot" style={{fontFamily:"'Diphylleia', 'Arial Narrow', Arial, sans-serif"}}>
          &#9733; Discover the magic of cinema with our Movie App. Explore, enjoy, and
            immerse yourself in a world of entertainment!
          </div>
          <div className="line2 foot" style={{fontFamily:"'Diphylleia', 'Arial Narrow', Arial, sans-serif"}}>
          &#9733; Thank you for being part of our movie-loving community! Your support
            makes our app even better.
          </div>
          <div className="line3 foot" style={{fontFamily:"'Diphylleia', 'Arial Narrow', Arial, sans-serif"}}>
          &#9733; Stay connected! Follow us on [social media handles] for the latest
            updates, movie recommendations, and more.
          </div>
          
        </div>
        <div className="footer_Section1">
          <div className="line4 foot" style={{fontFamily:"'Diphylleia', 'Arial Narrow', Arial, sans-serif"}}>© [2024]CineQuest. All Rights Reserved.</div>
          <div className="line5 foot" style={{fontFamily:"'Diphylleia', 'Arial Narrow', Arial, sans-serif", fontWeight: "3000"}}>
            Privacy Policy | Terms of Service | Contact Us
          </div>
          </div>
      </>
    )
  );
}
