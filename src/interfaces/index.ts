import rootReducer from "../store/reducers";

export interface Location {
  id: number;
  city: string;
  name: string;
  entity: string;
  country: string;
  isMobile: boolean;
  isAnalysis: boolean;
  sensorType: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  lastUpdated: string;
  firstUpdated: string;
  measurements: number;
  parameters: Parameter[];
  parameterObj?: Record<string, Parameter>;
}

export interface Parameter {
  id: number;
  unit: string;
  count: number;
  average: number;
  lastValue: number;
  parameter: string;
  displayName: string;
  lastUpdated: string;
  parameterId: number;
  firstUpdated: string;
  manufacturers?: string;
}

export interface LocationReducer {
  results?: Record<CityIndex, Location>;
  errors?: Record<CityIndex, string>;
}

export interface LoaderReducer {
  loading?: Record<CityIndex, boolean>;
}

export type AppState = ReturnType<typeof rootReducer>;

export interface LocationResponse {
  meta: {
    name: string;
    license: string;
    website: string;
    page: number;
    limit: number;
    found: number;
  };
  results: Location[];
}

export type CityIndex = "city1" | "city2";

export interface AQTableData {
  id: number;
  city1: number;
  city2: number;
  unit: string;
  displayName: string;
}
