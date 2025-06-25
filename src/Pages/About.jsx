import React from "react";
import countryData from "../api/countryData.json";

const About = () => {
  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">
          Here are the Interesting parts
          <br />
          we are proud of
        </h2>
        <div className="gradient-cards">
          {countryData.countries.map((country) => {
            const {
              id,
              name,
              capital,
              continent,
              population,
              currency,
              official_language,
              famous_for,
              independence_day,
              major_export,
              landmark,
            } = country;

            return (
              <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                  <p className="card-title">{name}</p>
                  <p>
                    <span className="card-description">Capital:</span> {capital}
                  </p>
                  <p>
                    <span className="card-description">Continent:</span>{" "}
                    {continent}
                  </p>
                  <p>
                    <span className="card-description">Population:</span>{" "}
                    {population}
                  </p>
                  <p>
                    <span className="card-description">Currency:</span>{" "}
                    {currency}
                  </p>
                  <p>
                    <span className="card-description">Language:</span>{" "}
                    {official_language}
                  </p>
                  <p>
                    <span className="card-description">Famous For:</span>{" "}
                    {famous_for}
                  </p>
                  <p>
                    <span className="card-description">Independence Day:</span>{" "}
                    {independence_day}
                  </p>
                  <p>
                    <span className="card-description">Major Export:</span>{" "}
                    {major_export}
                  </p>
                  <p>
                    <span className="card-description">Landmark:</span>{" "}
                    {landmark}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
