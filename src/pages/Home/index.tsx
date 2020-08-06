import React, { useEffect, useState, useMemo, useContext } from 'react';

import { Countrie } from '../../types/Countrie';
import Wrapper from '../../components/Wrapper';
import SearchTool from '../../components/SearchTool';
import SelectTool from '../../components/SelectTool';
import CardItem from '../../components/CardItem';

import { CountriesContext } from '../../hooks/CountriesContext';
import {
  Container,
  Content,
  CountriesContainer,
  FiltersContainer,
} from './styles';

const Home: React.FC = () => {
  const allCountries = useContext(CountriesContext);
  const [displayedCountries, setDisplayedCountries] = useState(allCountries);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setDisplayedCountries(allCountries);
  }, [allCountries]);

  const countriesList = useMemo(
    () =>
      displayedCountries.length > 0 ? (
        displayedCountries.map((countrie: Countrie) => (
          <CardItem key={countrie.name} countrie={countrie} />
        ))
      ) : (
        <p>Sem resultados</p>
      ),
    [displayedCountries],
  );

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
          <CountriesContainer>
            {!isSearching ? countriesList : <p>Buscando...</p>}
          </CountriesContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Home;
