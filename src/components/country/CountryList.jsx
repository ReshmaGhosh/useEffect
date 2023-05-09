import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data.slice(0, 20);
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.cca3} className="country">
          <img src={country.flags[0]} alt={country.name} />
          <h3>{country.name}</h3>
          <p>Region: {country.region}</p>
          <p>
            <a
              href={`https://maps.google.com?q=${country.name}`}
              target="_blank"
              rel="noreferrer"
            >
              Visit map here
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
