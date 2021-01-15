import React from "react";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";
import FlightsHeader from "../../components/FlightsHeader";

import { reset } from "../../redux/actions/formFlightRoutes";

import routes from "../../services/routes";

export default function AddFlightRoutes() {
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(reset());
    return () => {};
  }, []);

  function handleFormSubmit(values) {
    routes
      .addRoute(values)
      .then(() => history.push("/flights/routes"))
      .catch((error) => console.log(error));
  }

  return (
    <div id="edit-flight">
      <FlightsHeader />
      <FlightRouteForm onSubmit={handleFormSubmit} />
    </div>
  );
}
