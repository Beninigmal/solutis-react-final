import { Link } from 'react-router-dom';
import AirportButtonDelete from "../AirportButtonDelete";
import "./styles.css";

const AirportTableEntry = ({ airport }) => {
    return (
        <tr>
            <td name="airportSelected">
                <input type="checkbox" id={airport.id} />
            </td>
            <td>
                {airport.id}
            </td>
            <td name="airportCode">
                {airport.code}
            </td>
            <td name="airportName">
                {airport.name}
            </td>
            <td name="airportCitycode">
                {airport.citycode}
            </td>
            <td name="airportCityname">
                {airport.cityname}
            </td>
            <td name="airportCountryname">
                {airport.countryname}
            </td>
            <td name="airportCountrycode">
                {airport.countrycode}
            </td>
            <td name="airportContinentname">
                {airport.continentId}
            </td>
            <td name="airportTimezone">
                {airport.timezone}
            </td>
            <td name="airportLatitude">
                {airport.latitude}
            </td>
            <td name="airportLongitude">
                {airport.longitude}
            </td>
            <td name="airportCity">
                {airport.city}
            </td>

            <td id="airportActions" name="airportActions">
                <span>
                    <Link to={{
                        pathname: "/airports/view",
                        airport: airport
                    }}
                    >
                        <button className="btn btn-info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                            </svg>
                        </button>
                    </Link>

                    <Link to={"/airports/" + airport.id} >
                        <button className="btn btn-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </button>
                    </Link>

                    <AirportButtonDelete />
                </span>
            </td>
        </tr>
    )
}

export default AirportTableEntry