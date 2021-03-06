import React from "react";

import DescriptionAndBagageForm from "../FlightDescriptionAndBagageForm";
import OneWayForm from "../FlightOneWayForm";

export default function FlightManagementForm() {
  return (
    <div id="flights-management-form" className="card col-8">
      <div className="card-header">
        <h3>Flights Management</h3>
      </div>
      <div className="card-body">
        <OneWayForm />
        <DescriptionAndBagageForm />
      </div>
    </div>
  );
}
