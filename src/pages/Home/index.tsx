import React, { useEffect, useState, useMemo } from 'react';
import {
  getCountriesApiData,
  allCountriesRoute,
} from '../../services/countriesApi';
import { Countrie } from '../../types/Countrie';
import Wrapper from '../../components/Wrapper';
import SearchTool from '../../components/SearchTool';
import SelectTool from '../../components/SelectTool';
import CardItem from '../../components/CardItem';
import {
  Container,
  Content,
  CountriesContainer,
  FiltersContainer,
} from './styles';

const Home: React.FC = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getCountriesApiData(allCountriesRoute);

      if (response && response.status === 200) {
        const { data } = response;
        setCountries(data);
      }
    };
    fetchCountries();
  }, []);

  const countriesList = useMemo(
    () =>
      countries.map((countrie: Countrie) => (
        <CardItem key={countrie.name} countrie={countrie} />
      )),
    [countries],
  );

  return (
    <Container>
      <Wrapper>
        <Content>
          <FiltersContainer>
            <SearchTool />
            <SelectTool />
          </FiltersContainer>
          <CountriesContainer>{countriesList}</CountriesContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Home;
