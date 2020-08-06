import React from 'react';
import {
  getCountriesApiData,
  regionsRoute,
  allCountriesRoute,
} from '../../services/countriesApi';

import { Container } from './styles';

type SelectToolProps = {
  stateChange(newState: []): any;
};

const SelectTool: React.FC<SelectToolProps> = ({ stateChange }) => {
  const handleFilter = async (filter: string): Promise<void> => {
    const requestRoute = filter
      ? `${regionsRoute}/${filter}`
      : allCountriesRoute;
    const response = await getCountriesApiData(requestRoute);
    if (response.status === 200) {
      stateChange(response.data);
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
