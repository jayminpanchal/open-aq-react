import { AQTableData, CityLocation } from "../../interfaces";

export const buildTableData = (
  location1?: CityLocation,
  location2?: CityLocation
): AQTableData[] => {
  if (location1 && location2) {
    let totalKeys = Object.keys(location1.measurementsObj || {}).concat(
      Object.keys(location2.measurementsObj || {})
    );
    totalKeys = [...new Set(totalKeys)];
    return totalKeys.map((key) => ({
      displayName:
        location1.measurementsObj?.[key]?.parameter ||
        location2.measurementsObj?.[key]?.parameter ||
        "",
      city1: location1.measurementsObj?.[key]?.value || 0,
      city2: location2.measurementsObj?.[key]?.value || 0,
      unit:
        location1.measurementsObj?.[key]?.unit ||
        location2.measurementsObj?.[key]?.unit ||
        " - ",
    }));
  }

  if (location1) {
    return Object.keys(location1.measurementsObj || {}).map((key) => ({
      displayName: location1.measurementsObj?.[key].parameter || "",
      city1: location1.measurementsObj?.[key].value || 0,
      city2: 0,
      unit: location1.measurementsObj?.[key].unit || " - ",
    }));
  }

  if (location2) {
    return Object.keys(location2.measurementsObj || {}).map((key) => ({
      displayName: location2.measurementsObj?.[key].parameter || "",
      city1: 0,
      city2: location2.measurementsObj?.[key].value || 0,
      unit: location2.measurementsObj?.[key].unit || " - ",
    }));
  }
  return [];
};
