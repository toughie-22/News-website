// src/components/Header.jsx
import React, { useState } from "react";
import { FaSearch, FaBell, FaSun, FaMoon } from "react-icons/fa";
import CountrySelector from "./CountrySelector";
import logoImage from "../assets/logo.jpg";

function Header({
  category,
  setCategory,
  country,
  setCountry,
  theme,
  toggleTheme,
  searchQuery,
  setSearchQuery,
}) {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const topCategories = [
    "Top Stories",
    "World",
    "Politics",
    "Business",
    "Tech",
    "Culture",
  ];
  const subCategories = [
    "All",
    "Top Stories",
    "World",
    "Politics",
    "Business",
    "Tech",
  ];

  const handleCategoryClick = (cat) => {
    setSearchQuery("");
    setLocalSearch("");
    const newCategory = cat === "All" ? "" : cat.toLowerCase().replace(" ", "");
    setCategory(newCategory);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    setCategory("");
  };

  return (
    <header>
      {/* --- 1. Top Navbar --- */}
      <nav className="top-nav">
        <div className="top-nav-left">
          <img
            src={logoImage}
            alt="News Today Logo"
            className="logo-img"
            style={{ height: "24px" }}
          />
          <span className="brand-name">News Today</span>
        </div>

        <div className="top-nav-center">
          {topCategories.map((cat) => {
            const isCategoryActive =
              category === cat.toLowerCase().replace(" ", "") && !searchQuery;
            return (
              <button
                key={cat}
                className={`top-cat-btn ${isCategoryActive ? "active" : ""}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="top-nav-right">
          <FaBell size={18} className="icon-btn" />

          {/* CRITICAL FIX: Use the 'dark-mode' string to check the theme state */}
          <button onClick={toggleTheme} className="icon-btn">
            {theme === "dark-mode" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          <CountrySelector country={country} setCountry={setCountry} />
        </div>
      </nav>

      {/* --- 2. Search and Category Filter Bar --- */}
      <div className="filter-bar">
        <form onSubmit={handleSearchSubmit} className="search-input-container">
          <FaSearch size={18} className="search-input-icon" />
          <input
            type="text"
            placeholder="Search for news, topics..."
            className="search-input"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          <button type="submit" className="search-submit-btn icon-btn">
            Go
          </button>
        </form>

        <div className="category-filter-bar">
          {subCategories.map((cat) => (
            <button
              key={cat}
              className={`cat-filter-btn ${
                (cat.toLowerCase() === "all" &&
                  category === "" &&
                  !searchQuery) ||
                (category === cat.toLowerCase().replace(" ", "") &&
                  cat.toLowerCase() !== "all" &&
                  !searchQuery)
                  ? "active"
                  : ""
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
