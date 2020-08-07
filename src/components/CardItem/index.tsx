import React from 'react';
import { Country } from '../../types/Country';
import { numberFormater } from '../../utils';
import { Container, CardImage, CardTitle, CardDescription } from './styles';

type CardProps = {
  country: Country;
};

const CardItem: React.FC<CardProps> = ({ country }) => {
  const population = numberFormater(country.population);

  return (
    <Container to={`/${country.alpha3Code}`}>
      <CardImage src={country.flag} alt={country.name} />
      <CardTitle>{country.name}</CardTitle>
      <CardDescription>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </CardDescription>
    </Container>
  );
};

export default CardItem;
