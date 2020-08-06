import React, { createContext, useState, useEffect } from 'react';
import { Countrie } from '../types/Countrie';
import {
  getCountriesApiData,
  allCountriesRoute,
} from '../services/countriesApi';

export const CountriesContext = createContext<Countrie[]>([]);

export const CountriesProvider: React.FC = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getCountriesApiData(allCountriesRoute);
      if (response && response.status === 200) {
        const { data } = response;
        setAllCountries(data);
      }
    };
    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider value={allCountries}>
      {children}
    </CountriesContext.Provider>
  );
};
