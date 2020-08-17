import React, {
  useEffect,
  useState,
  useMemo,
  useContext,
  Suspense,
} from 'react';

import { Country } from '../../types/Country';
import Wrapper from '../../components/Wrapper';
import SearchTool from '../../components/SearchTool';
import SelectTool from '../../components/SelectTool';
import { CountriesContext } from '../../hooks/CountriesContext';
import Loader from '../../components/Loader';
import NoResults from '../../components/NoResults';

import {
  Container,
  Content,
  CountriesContainer,
  FiltersContainer,
} from './styles';

const Home: React.FC = () => {
  const CardItem = React.lazy(() => import('../../components/CardItem'));
  const allCountries = useContext(CountriesContext);
  const [displayedCountries, setDisplayedCountries] = useState(allCountries);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setDisplayedCountries(allCountries);
  }, [allCountries]);

  const countriesList = useMemo(
    () =>
      displayedCountries.map((country: Country) => (
        <CardItem key={country.name} country={country} />
      )),
    [displayedCountries],
  );

  const noResults = hasSearched && <NoResults />;

  return (
    <Container>
      <Wrapper>
        <Content>
          <FiltersContainer>
            <SearchTool
              isSearching={setIsSearching}
              setResults={setDisplayedCountries}
              hasSearched={setHasSearched}
            />
            <SelectTool stateChange={setDisplayedCountries} />
          </FiltersContainer>
          {displayedCountries && displayedCountries.length > 0 ? (
            <CountriesContainer>
              <Suspense fallback={<Loader />}>
                {!isSearching ? countriesList : <p>Buscando...</p>}
              </Suspense>
            </CountriesContainer>
          ) : (
            noResults
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Home;
