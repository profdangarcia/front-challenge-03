import React from 'react';

import { Container } from './styles';

const SelectTool: React.FC = () => {
  return (
    <Container placeholder="Filter by Region">
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Container>
  );
};

export default SelectTool;
