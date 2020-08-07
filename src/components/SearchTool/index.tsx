import React, { useState, useEffect, useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import { Country } from '../../types/Country';
import { useDebounce } from '../../hooks';
import { filterRoute, getCountriesApiData } from '../../services/countriesApi';
import { CountriesContext } from '../../hooks/CountriesContext';
import { Container, SearchInput } from './styles';

type SearchToolProps = {
  isSearching(newState: boolean): void;
  setResults(results: Country[] | []): void;
};

const SearchTool: React.FC<SearchToolProps> = ({ isSearching, setResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const allCountries = useContext(CountriesContext);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const searchFor = async (): Promise<void> => {
      isSearching(true);
      const requestRoute = `${filterRoute}/${debouncedSearchTerm}`;
      const response = await getCountriesApiData(requestRoute);
      isSearching(false);
      let searchResponse: [] | Country[] = [];
      if (response.status === 200) {
        searchResponse = response.data;
      }
      setResults(searchResponse);
    };
    if (debouncedSearchTerm) {
      searchFor();
    } else {
      setResults(allCountries);
    }
  }, [debouncedSearchTerm, allCountries, isSearching, setResults]);

  return (
    <Container>
      <MdSearch />
      <SearchInput
        placeholder="Search for a country..."
        onChange={e => setSearchTerm(e.target.value)}
      />
    </Container>
  );
};

export default SearchTool;
