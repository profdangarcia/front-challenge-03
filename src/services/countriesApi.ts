import axios from 'axios';
import { API_BASE_URL } from '../config/constants';

export const countriesApi = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

interface APIResponse {
  data: [];
  status: number;
  message?: string;
}

export async function getCountriesApiData(
  route: string,
  params = '',
): Promise<APIResponse> {
  const apiRoute = params ? `${route}/${params}` : route;
  try {
    const { data, status } = await countriesApi.get(apiRoute);
    return { data, status };
  } catch (e) {
    return {
      status: 500,
      message: `API is not answering:${e.message}`,
      data: [],
    };
  }
}

export const allCountriesRoute = '/rest/v2/all';
export const filterRoute = '/rest/v2/name';
export const regionsRoute = '/rest/v2/region';
