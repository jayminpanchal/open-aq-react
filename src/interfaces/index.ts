import rootReducer from "../store/reducers";

export interface CityLocation {
  location: string;
  city: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  measurements: Measurement[];
  measurementsObj: Record<string, Measurement>;
}

export interface Measurement {
  parameter: string;
  value: number;
  lastUpdated: string;
  unit: string;
}

export interface LocationReducer {
  results?: Record<CityIndex, CityLocation>;
  errors?: Record<CityIndex, string>;
}

export interface LoaderReducer {
  loading?: Record<CityIndex, boolean>;
}

export type AppState = ReturnType<typeof rootReducer>;

export interface CityLocationResponse {
  meta: {
    name: string;
    license: string;
    website: string;
    page: number;
    limit: number;
    found: number;
  };
  results: CityLocation[];
}

export type CityIndex = "city1" | "city2";

export interface AQTableData {
  city1: number;
  city2: number;
  unit: string;
  displayName: string;
}
