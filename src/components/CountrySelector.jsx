// src/components/CountrySelector.jsx
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const countries = [
  { code: "us", name: "USA" },
  { code: "gb", name: "UK" },
  { code: "ca", name: "Canada" },
  { code: "ng", name: "Nigeria" },
];

function CountrySelector({ country, setCountry }) {
  const [showCountries, setShowCountries] = useState(false);

  const handleCountryChange = (code) => {
    setCountry(code);
    setShowCountries(false);
  };

  return (
    <div className="country-selector-wrapper">
      <FaBars
        size={18}
        className="icon-btn hamburger-icon"
        onClick={() => setShowCountries(!showCountries)}
      />

      {showCountries && (
        <div className="country-dropdown">
          {countries.map((c) => (
            <button
              key={c.code}
              onClick={() => handleCountryChange(c.code)}
              className={c.code === country ? "selected" : ""}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountrySelector;
