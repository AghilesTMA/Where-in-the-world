import { useContext } from "react";
import { DarkTheme } from "../../../context/ThemeProvider";
import { Link } from "react-router-dom";

function CountryCard({ flags: { png }, name, population, region, capital }) {
  const { darkTheme } = useContext(DarkTheme);
  return (
    <Link to={`/Country/${name}`} style={{textDecoration:"none"}}>
      <div
        className="CountryCard"
        style={{
          backgroundColor: darkTheme
            ? "hsl(209, 23%, 22%)"
            : "hsl(0, 0%, 100%)",
          color: darkTheme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
        }}
      >
        <div className="img-wrapper">
          <img src={png} alt={"FlageImage"}></img>
        </div>
        <div className="textInfo">
          <h2>{name}</h2>
          <ul>
            <li>
              <h4>Population: </h4>
              {population}
            </li>
            <li>
              <h4>Region: </h4>
              {region}
            </li>
            <li>
              <h4>Capital: </h4>
              {capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
