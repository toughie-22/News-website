// src/App.jsx

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Spinner from "./components/Spinner";
import Login from "./components/login";

function App() {
  // --- Theme State ---
  const storedTheme = localStorage.getItem("news-theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  // --- Login Status State ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // --- News Filters ---
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // --- Gnews API Key (hardcoded for now) ---
  const apiKey = "cf93adbc461d829a05e162ae825e66f0";

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark-mode" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("news-theme", theme);
  }, [theme]);

  return (
    <div className={theme}>
      {isLoggedIn ? (
        <>
          <Header
            category={category}
            setCategory={setCategory}
            country={country}
            setCountry={setCountry}
            theme={theme}
            toggleTheme={toggleTheme}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {searchQuery === "" && category === "" && <HeroSection />}

          <main>
            <div className="container">
              <h2 className="recent-articles-title">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : category === ""
                  ? "Top Headlines"
                  : category.charAt(0).toUpperCase() +
                    category.slice(1) +
                    " News"}
              </h2>
            </div>

            <NewsList
              apiKey={apiKey}
              country={country}
              category={category}
              searchQuery={searchQuery}
            />
          </main>

          <Footer />
        </>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
