import React from "react";
import { NavLink } from "react-router-dom";
const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt="flags.alt" />

        <div className="country-info">
          <p className="card-title">{name.common}</p>
          <p>
            <span className="card-description">population:</span> {population}
          </p>
          <p>
            <span className="card-description">region:</span> {region}
          </p>
          <p>
            <span className="card-description">capital:</span> {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button>ReadMore</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
