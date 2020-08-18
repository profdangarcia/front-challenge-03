import React, { createContext, useState, useEffect } from 'react';
import { Country } from '../types/Country';
import {
  getCountriesApiData,
  allCountriesRoute,
} from '../services/countriesApi';

interface CountriesContextProps {
  allCountries: Country[];
  hasErrors: boolean;
}

export const CountriesContext = createContext<CountriesContextProps>(
  {} as CountriesContextProps,
);

export const CountriesProvider: React.FC = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getCountriesApiData(allCountriesRoute);
      if (response && response.status === 200) {
        const { data } = response;
        setAllCountries(data);
      } else {
        setHasErrors(true);
      }
    };
    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider value={{ allCountries, hasErrors }}>
      {children}
    </CountriesContext.Provider>
  );
};
