import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Card from "./components/Card";
import Popular from "./components/popular";
import Top from "./components/Top";
import Profile from "./components/Profile";
import MovieList from "./pages/movieDetail/Movie";
import SearchBar from "./components/SearchBar";
import Alert from "./components/Alert.js";
import LandingPage from "./components/LandingPage";
import Help from "./components/Help.js";
function App() {
  const [progress, setProgress] = useState(0);
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  const [showAlert, setShowAlert] = useState(false);

  // State for favorite movies
  const [favorites, setFavorites] = useState([]);

  // Making Add to Favorites and Remove from Favorites Section
  useEffect(() => {
    // Load favorites from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const updateLocalStorage = (newFavorites) => {
    // Update local storage whenever favorites change
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handleAddToFavorites = (movie) => {
    // Add the selected movie to favorites
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, movie];
      updateLocalStorage(newFavorites);
      return newFavorites;
    });
    setShowAlert(true);
    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleRemoveFromFavorites = (movieId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter(
        (movie) => movie.id !== movieId
      );
      updateLocalStorage(newFavorites);
      return newFavorites;
    });
  };

  return (
    <Auth0Provider
      domain="dev-obx555c1z6rfkbof.us.auth0.com"
      clientId="1DsK1DLQAA131Tz6puAY2CikI4z7Tl2G"
      authorizationParams={{
        redirect_uri: "http://thunderbird7413.github.io/cinequest/callback",
      }}
      audience="https://api.cinequest.com"
      scope="update:current_user_metadata read:current_user "
    >
      <div className="App">
        <Router basename="/cinequest">
          {/* Alert for 3 seconds when "Add to Favorites" button is clicked */}
          {showAlert && <Alert />}
          <Header showAlert={showAlert} />
          <Routes>
            <Route path="/cinequest" element={<LandingPage />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route exact path="/movies/top_rated" element={<Card />}></Route>
            <Route exact path="movies/popular" element={<Popular />}></Route>
            <Route path="movies/upcoming" element={<Top />}></Route>
            <Route path="movies/help" element={<Help />}></Route>
            <Route
              path="movies/profile"
              element={
                <Profile
                  favorites={favorites}
                  onRemoveFromFavorites={handleRemoveFromFavorites}
                />
              }
            ></Route>
            {/* Using useParams() Hook */}
            <Route path="movies/:id" element={<MovieList onAddToFavorites={handleAddToFavorites}/>}></Route>
            <Route
              path="movie/search"
              element={
                <SearchBar
                  updateProgress={updateProgress}
                  onAddToFavorites={handleAddToFavorites}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;
