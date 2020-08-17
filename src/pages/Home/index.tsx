import React, { useEffect, useState, useMemo, useContext } from 'react';

import { Country } from '../../types/Country';
import Wrapper from '../../components/Wrapper';
import SearchTool from '../../components/SearchTool';
import SelectTool from '../../components/SelectTool';
import { CountriesContext } from '../../hooks/CountriesContext';
import CardItem from '../../components/CardItem';
import NoResults from '../../components/NoResults';
import Loader from '../../components/Loader';

import {
  Container,
  Content,
  CountriesContainer,
  FiltersContainer,
} from './styles';

const Home: React.FC = () => {
  const allCountries = useContext(CountriesContext);
  const [displayedCountries, setDisplayedCountries] = useState(allCountries);
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    setDisplayedCountries(allCountries);
    setIsSearching(false);
  }, [allCountries]);

  const countriesList = useMemo(
    () =>
      displayedCountries.map((country: Country) => (
        <CardItem key={country.name} country={country} />
      )),
    [displayedCountries],
  );

  const alternativeElement = isSearching ? <Loader /> : <NoResults />;

  return (
    <Container>
      <Wrapper>
        <Content>
          <FiltersContainer>
            <SearchTool
              isSearching={setIsSearching}
              setResults={setDisplayedCountries}
            />
            <SelectTool stateChange={setDisplayedCountries} />
          </FiltersContainer>
          {displayedCountries.length > 0 && !isSearching ? (
            <CountriesContainer>{countriesList}</CountriesContainer>
          ) : (
            alternativeElement
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Home;
