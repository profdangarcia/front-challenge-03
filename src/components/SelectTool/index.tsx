import React, { useContext } from 'react';
import { Countrie } from '../../types/Countrie';
import { getCountriesApiData, regionsRoute } from '../../services/countriesApi';
import { CountriesContext } from '../../hooks/CountriesContext';
import { Container } from './styles';

type SelectToolProps = {
  stateChange(newState: Countrie[]): void;
};

const SelectTool: React.FC<SelectToolProps> = ({ stateChange }) => {
  const allCountries = useContext(CountriesContext);

  const handleFilter = async (filter: string): Promise<void> => {
    const requestRoute = `${regionsRoute}/${filter}`;
    if (filter) {
      const response = await getCountriesApiData(requestRoute);
      if (response.status === 200) {
        stateChange(response.data);
      }
    } else {
      stateChange(allCountries);
    }
  };

  return (
    <Container
      placeholder="Filter by Region"
      onChange={e => handleFilter(e.target.value)}
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </Container>
  );
};

export default SelectTool;
