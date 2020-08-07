import React from 'react';
import { Country } from '../../types/Country';
import { numberFormater } from '../../utils';

import {
  Container,
  ItemImage,
  DetailsBox,
  SmallInfoText,
  ItemDetails,
  PrimaryDetails,
  SecondaryDetails,
  ItemExtraDetails,
  CountryBorderBox,
} from './styles';

type CountryInfoProps = {
  country: Country;
};

type SmallInfo = {
  description: string;
  info: string;
};

const CountryInfo: React.FC<CountryInfoProps> = ({ country }) => {
  const population = numberFormater(country.population);

  const topLevelDomain = country.topLevelDomain
    .map(domain => domain)
    .join(', ');

  const currencies = country.currencies
    .map(currency => currency.name)
    .join(', ');

  const languages = country.languages.map(language => language.name).join(', ');

  const countryBorders = country.borders.map(border => (
    <CountryBorderBox>{border}</CountryBorderBox>
  ));

  const CountrySmallInfo: React.FC<SmallInfo> = ({ description, info }) => (
    <SmallInfoText>
      <strong>{`${description}: `}</strong>
      {info}
    </SmallInfoText>
  );

  return (
    <Container>
      <ItemImage src={country.flag} alt={country.name} />
      <DetailsBox>
        <h1 className="country-name">{country.name}</h1>
        <ItemDetails>
          <PrimaryDetails>
            <CountrySmallInfo
              description="Native Name"
              info={country.nativeName}
            />
            <CountrySmallInfo description="Population" info={population} />
            <CountrySmallInfo description="Region" info={country.region} />
            <CountrySmallInfo
              description="Sub Region"
              info={country.subregion}
            />
            <CountrySmallInfo description="Capital" info={country.capital} />
          </PrimaryDetails>
          <SecondaryDetails>
            <CountrySmallInfo
              description="Top Level Domain"
              info={topLevelDomain}
            />
            <CountrySmallInfo description="Currencies" info={currencies} />
            <CountrySmallInfo description="Languages" info={languages} />
          </SecondaryDetails>
        </ItemDetails>
        <ItemExtraDetails>
          <strong>Border Countries:</strong>
          {countryBorders}
        </ItemExtraDetails>
      </DetailsBox>
    </Container>
  );
};

export default CountryInfo;
