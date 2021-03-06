import {
  ROUTES_UPDATE_GENERAL,
  ROUTES_UPDATE_NODE,
  ROUTES_OVERRIDE,
  ROUTES_RESET,
} from "../../constants/formFlightRoutes";

const INITIAL_STATE = {
  refundable: "refundable",
  flightType: "business",
  direction: "one-way",
  status: "enabled",
  totalHours: "",
  deposite: "",
  vatTax: "",

  route: [
    {
      id: 0,
      type: "Departure",
      city: "citycode 0",
      airline: "",
      flightNumber: "",
      date: "",
      checkin: "",
      checkout: "",
    },
    {
      id: 1,
      type: "Arrival",
      city: "citycode 0",
      airline: "",
      flightNumber: "",
      date: "",
      checkin: "",
      checkout: "",
    },
  ],

  adultsPrice: "",
  infantPrice: "",
  childPrice: "",

  description: "",
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case ROUTES_UPDATE_NODE:
      const { id, data } = action.payload;
      return {
        ...state,
        route: state.route.map((node) =>
          node.id !== id ? node : { ...node, ...data }
        ),
      };
    case ROUTES_OVERRIDE:
      return action.payload.data;
    case ROUTES_UPDATE_GENERAL:
      return { ...state, [action.payload.key]: action.payload.value };
    case ROUTES_RESET:
    default:
      return INITIAL_STATE;
  }
}
