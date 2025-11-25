import { getApiResponse } from "@/utils/get-api-response";

import { ConstantsTypes } from "@/types/shared";
import {
  CityType,
  CommunityType,
  CountryType,
  StateType,
  SubCommunityType,
} from "@/types/places";
import { LocationItems } from "@/types/global";

const getAllCountries = (revalidate?: number) =>
  getApiResponse<{
    data: CountryType[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/country/getallcountries`,
    revalidate: revalidate || 0,
  });

const getAllCountryCode = () =>
  getApiResponse<{
    data: CountryType[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/country/getallcountrycodes`,
  });

const getStatesByCountry = ({
  id,
  revalidate,
}: {
  id?: string;
  revalidate?: number;
}) =>
  getApiResponse<{
    data: StateType[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/country/getstatesbycountry/${id}`,
    revalidate: revalidate || 0,
  });

const getCitiesByState = ({ id }: { id?: string }) =>
  getApiResponse<{
    data: CityType[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/country/getcitiesbystate/${id}`,
    revalidate: 0,
  });

const getCommunitiesByCity = ({ id }: { id?: string }) =>
  getApiResponse<{
    data: CommunityType[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/country/getcommunitiesbycity/${id}`,
    revalidate: 0,
  });

const getsubcommunitiesbycommunity = ({ id }: { id?: string }) =>
  getApiResponse<{
    data: SubCommunityType[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/country/getsubcommunitiesbycommunity/${id}`,
    revalidate: 0,
  });

const getLocationsBySearchText = ({
  search = "",
  countryId = 1,
  page = "1",
  pageSize = "10",
}: {
  search: string;
  countryId?: number;
  page?: string;
  pageSize?: string;
}) =>
  getApiResponse<{
    data: LocationItems[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getLocationsBySearchText?search=${search}&country_id=${countryId}&page_size=${pageSize}&page_no=${page}`,
    revalidate: 0,
  });

const getPropertyLocationsBySubCommunity = ({ id }: { id: number }) =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getPropertyLocationsBySubCommunity/${id}`,
    revalidate: 0,
  });

export const locations = {
  getAllCountries,
  getStatesByCountry,
  getCitiesByState,
  getCommunitiesByCity,
  getsubcommunitiesbycommunity,
  getLocationsBySearchText,
  getPropertyLocationsBySubCommunity,
  getAllCountryCode,
};
