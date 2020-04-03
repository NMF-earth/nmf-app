import { pipe, prop, filter, map, sum, invoker, reduce, maxBy } from "ramda";
import moment from "moment";
import { transport, TransportEnum, food } from "carbon-footprint";
import { EmissionEnum, Emission } from "../../interfaces";

const getFlightType = (duration: number) => {
  /* Below 3 hours */
  if (duration < 180) {
    return TransportEnum.shortHaulFlight;
  }

  /* Between 3 and 6 hours */
  if (duration < 360) {
    return TransportEnum.mediumHaulFlight;
  }

  /* Above 6 hours */
  return TransportEnum.longHaulFlight;
};

const getFlightEmissionValue = (duration: number) => {
  switch (getFlightType(duration)) {
    case TransportEnum.shortHaulFlight: {
      /* Paris -> Toulouse 1h15 AF6122 588 km */
      /* Paris -> Stockholm 2h35 AF1462 1543 km */
      const averageSpeedShortHaulSpeed =
        ((588 * 1000) / (60 + 15) + (1543 * 1000) / (2 * 60 + 35)) / 2;
      return averageSpeedShortHaulSpeed * duration;
    }
    case TransportEnum.mediumHaulFlight: {
      /* Paris -> Istanbul 3h25 AF1390 2255 km */
      /* Paris -> Dakar 5h45 AF718 4205 km */
      const averageMediumHaulSpeed =
        ((2255 * 1000) / (3 * 60 + 25) + (4205 * 1000) / (5 * 60 + 45)) / 2;
      return averageMediumHaulSpeed * duration;
    }
    case TransportEnum.longHaulFlight: {
      /* Paris -> New York 8h15 AF22 5837 km */
      /* Paris -> Santiago 14h30 AF406 11648 km */
      const averageLongHaulSpeed =
        ((5837 * 1000) / (8 * 60 + 15) + (11648 * 1000) / (14 * 60 + 30)) / 2;
      return averageLongHaulSpeed * duration;
    }
    default:
      return 0;
  }
};

const getC02ValueFromEmission = (emission: Emission) => {
  if (emission.emissionModelType === EmissionEnum.custom) {
    return emission.value;
  }
  const model = {
    ...transport,
    ...food
  };
  return emission.value * model[emission.emissionModelType];
};

const isoToEpoch = pipe(moment, invoker("valueOf"));

const getLatestEmission = (emissions: Array<Emission>) => {
  // let toto = reduce(
  //   maxBy(pipe(prop("creationDate"), isoToEpoch)),
  //   { creationDate: "0000-00-00T00:00:00.0Z" },
  //   emissions
  // );
  // console.log("getLatestEmission -> toto", toto);
  // console.log("getLatestEmission -> emissions", emissions);
  return emissions;
};

// var page = [1, 2, 3],
//     result = R.reduce(R.max, -Infinity, page);

export default {
  getLatestEmission,
  getC02ValueFromEmission,
  getFlightType,
  getFlightEmissionValue
};
