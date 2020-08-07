import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import { codeRoute, getCountriesApiData } from '../../services/countriesApi';
import { Country } from '../../types/Country';
import Wrapper from '../../components/Wrapper';
import CountryInfo from '../../components/CountryInfo';
import { Container, BackButton } from './styles';

type TParams = { code: string };

const CountryDetails = ({
  match,
}: RouteComponentProps<TParams>): JSX.Element => {
  const [currentCountry, setCurrentCountry] = useState({} as Country);
  const countryCode = match.params.code;

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await getCountriesApiData(codeRoute, countryCode);
      if (response && response.status === 200) {
        const { data } = response;
        setCurrentCountry(data);
      }
    };
    fetchCountry();
  }, [countryCode]);

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <BackButton type="button">Voltar</BackButton>
        </Link>
        {currentCountry && currentCountry.name && (
          <CountryInfo country={currentCountry} />
        )}
      </Wrapper>
    </Container>
  );
};

export default CountryDetails;
