import React from "react";

export default function CountryItem({ index, country }) {
  if (index < 20) {
    return (
      <div className="country">
        <div>Name : {country.name.common}</div>
        <div>Region :{country.region}</div>
        <a href={country.maps.googleMaps}>Visit map here</a>
        <br />
        <img src={country.flags.png} alt="country" width="50px" height="50px" />
        <div>
          Borders:
          {country.borders
            ? country.borders.map((border, index) => (
                <li key={index}>{border}</li>
              ))
            : "no border"}
        </div>
        <div>
          Languages:{" "}
          {Object.keys(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </div>
      </div>
    );
  }
}
