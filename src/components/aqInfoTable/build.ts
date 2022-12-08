import { AQTableData, Location } from "../../interfaces";

export const buildTableData = (
  location1?: Location,
  location2?: Location
): AQTableData[] => {
  if (location1 && location2) {
    const totalKeys = Object.keys(location1.parameterObj || {}).concat(
      Object.keys(location2.parameterObj || {})
    );
    return totalKeys.map((key) => ({
      id:
        location1.parameterObj?.[key]?.id ||
        location2.parameterObj?.[key]?.id ||
        0,
      displayName:
        location1.parameterObj?.[key]?.displayName ||
        location2.parameterObj?.[key]?.displayName ||
        "",
      city1: location1.parameterObj?.[key]?.lastValue || 0,
      city2: location2.parameterObj?.[key]?.lastValue || 0,
      unit:
        location1.parameterObj?.[key]?.unit ||
        location2.parameterObj?.[key]?.unit ||
        " - ",
    }));
  }

  if (location1) {
    return Object.keys(location1.parameterObj || {}).map((key) => ({
      id: location1.parameterObj?.[key].id || 0,
      displayName: location1.parameterObj?.[key].displayName || "",
      city1: location1.parameterObj?.[key].lastValue || 0,
      city2: 0,
      unit: location1.parameterObj?.[key].unit || " - ",
    }));
  }

  if (location2) {
    return Object.keys(location2.parameterObj || {}).map((key) => ({
      id: location2.parameterObj?.[key].id || 0,
      displayName: location2.parameterObj?.[key].displayName || "",
      city1: 0,
      city2: location2.parameterObj?.[key].lastValue || 0,
      unit: location2.parameterObj?.[key].unit || " - ",
    }));
  }
  return [];
};
