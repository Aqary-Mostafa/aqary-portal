export type LocationType = {
  lat: number;
  lng: number;
};

export type CountryType = {
  id: number;
  label: string;
  country: string;
  flag: string;
  alpha2_code: number;
  alpha3_code: number;
  country_code: number;
};

export type StateType = {
  id: number;
  label: string;
  state?: string;
  countries_id: number;
};

export type CityType = {
  id: number;
  label: string;
  city?: string;
  states_id: number;
};

export type CommunityType = {
  id: number;
  label: string;
  community?: string;
  cities_id: number;
};

export type SubCommunityType = {
  id: number;
  label: string;
  sub_community?: string;
  communties_id: number;
};
