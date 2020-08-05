import React from 'react';
import { Countrie } from '../../types/Countrie';
import { numberFormater } from '../../utils';
import { Container, CardImage, CardTitle, CardDescription } from './styles';

type CardProps = {
  countrie: Countrie;
};

const CardItem: React.FC<CardProps> = ({ countrie }) => {
  const population = numberFormater(countrie.population);

  return (
    <Container>
      <CardImage src={countrie.flag} alt={countrie.name} />
      <CardTitle>{countrie.name}</CardTitle>
      <CardDescription>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {countrie.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {countrie.capital}
        </p>
      </CardDescription>
    </Container>
  );
};

export default CardItem;
