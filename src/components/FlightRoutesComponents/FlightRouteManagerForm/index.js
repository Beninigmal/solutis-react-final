import React from "react";

import FlightRouteNode from "../FlightRouteNode";

// const DEFAULT_NODE = {
//   flightNumber: 0,
//   checkout: "",
//   airline: "",
//   city: "",
//   date: "",
//   time: "",
// };

export default function FlightRouteManagerForm() {
  const connections = {}; // TODO: Move this data to store. (And catch with useSelector)

  function handleAddTransitClick() {
    console.log("ADD TRANSIT CLICK BEHAVIOUR");
    // setConnections([
    //   ...connections.slice(0, connections.length - 1),
    //   {
    //     id: connections.length,
    //     type: "Transit",
    //     ...DEFAULT_NODE,
    //   },
    //   ...connections.slice(connections.length - 1),
    // ]);
  }

  function onChange(id) {
    return (e) => {
      const { name, value } = e.target;
      console.log(
        `Attribute ${name} changed to ${value} on ${id} row of FlightRouteManagerForm`
      );
      // setConnections((connections) =>
      //   connections.map((item, i) =>
      //     i === id ? { ...item, [name]: value } : item
      //   )
      // );
    };
  }

  // React.useEffect(() => {
  //   handler.onChange({ target: { name: "route", value: connections } });
  //   return () => {};
  // }, [connections]);

  function handleDeleteNodeClick(id) {
    return () => {
      console.log(`REMOVE NODE WITH ID = ${id}`);
      // setConnections(connections.filter((connection) => connection.id !== id));
    };
  }

  return (
    <div id="connection-manager-form">
      <table className="table text-center">
        <thead>
          <tr>
            <th className="col">Type</th>
            <th className="col">Airport</th>
            <th className="col">Airline</th>
            <th className="col">Flight NO.</th>
            <th className="col">Date</th>
            <th className="col">Time</th>
            <th className="col">Checkout</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: REDUX ON CONNECTIONS */}
          {/* {connections.map((node, i) => (
            <FlightRouteNode
              key={node.id}
              node={node}
              onClickDelete={handleDeleteNodeClick(node.id)}
              onChange={onChange(i)}
              removable={i > 0 && i < connections.length - 1}
            />
          ))} */}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleAddTransitClick}
      >
        Add Transit
      </button>
    </div>
  );
}
