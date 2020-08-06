import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, SearchInput } from './styles';

const SearchTool: React.FC = () => {
  return (
    <Container>
      <MdSearch />
      <SearchInput placeholder="Search for a country..." />
    </Container>
  );
};

export default SearchTool;
