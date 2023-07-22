import { useContext, useEffect, useState } from "react";
import { DarkTheme } from "../../../context/ThemeProvider";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CountryPage() {
  const { name } = useParams();
  const { darkTheme } = useContext(DarkTheme);
  const [countryData, setCountryData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setCountryData([...data.filter((country) => country.name == name)][0]);
  }, []);
  console.log(countryData);

  return (
    <div
      className="country-page-wrapper"
      style={{
        backgroundColor: darkTheme ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
        color: darkTheme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      }}
    >
      <div
        className="country-details-wrapper"
        style={{
          backgroundColor: darkTheme ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
          color: darkTheme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
        }}
      >
        <button
          type="button"
          style={{
            backgroundColor: darkTheme
              ? "hsl(209, 23%, 22%)"
              : "hsl(0, 0%, 100%)",
            color: darkTheme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
          }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
        <div className="country-img-wrapper">
          <img src={countryData?.flags?.png} alt="countryFlag" />
        </div>
        <ul className="country-details-1">
          <li>
            <h2>{countryData?.name || null}</h2>
          </li>
          <li>
            <h3>Native Name: </h3>
            {countryData?.nativeName || null}
          </li>
          <li>
            <h3>Population: </h3>
            {countryData?.population || null}
          </li>
          <li>
            <h3>Region: </h3>
            {countryData?.region || null}
          </li>
          <li>
            <h3>Capital: </h3>
            {countryData?.capital || null}
          </li>
        </ul>
        <ul className="country-details-2">
          <li>
            <h3>Top Level domain: </h3>
            {countryData?.topLevelDomain?.[0] || null}
          </li>
          <li>
            <h3>currencies: </h3>
            {countryData?.currencies?.[0]?.name || null}
          </li>
          <li>
            <h3>Languages: </h3>
            {`${countryData?.languages?.map((lang) => lang.name)}` || null}
          </li>
        </ul>
        <div className="borders-wrapper">
          <h3>Border Countries: </h3>
          {countryData?.borders?.map((country) => {
            return (
              <li
                key={country}
                style={{
                  backgroundColor: darkTheme
                    ? "hsl(209, 23%, 22%)"
                    : "hsl(0, 0%, 100%)",
                  color: darkTheme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
                }}
              >
                {country}
              </li>
            );
          }) || null}
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
