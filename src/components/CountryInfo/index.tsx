import React, { useContext } from 'react';
import { Country } from '../../types/Country';
import { numberFormater } from '../../utils';
import { CountriesContext } from '../../hooks/CountriesContext';
import {
  Container,
  ItemImage,
  DetailsBox,
  SmallInfoText,
  ItemDetails,
  PrimaryDetails,
  SecondaryDetails,
  ItemExtraDetails,
  BordersGrid,
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
  const { allCountries } = useContext(CountriesContext);

  const topLevelDomain = country.topLevelDomain
    .map(domain => domain)
    .join(', ');

  const currencies = country.currencies
    .map(currency => currency.name)
    .join(', ');

  const languages = country.languages.map(language => language.name).join(', ');

  const countryBorders = country.borders.map(border => {
    const [borderCountry] =
      allCountries &&
      allCountries.filter(countryData => countryData.alpha3Code === border);
    const name = borderCountry && borderCountry.name;
    const trimedCountryName =
      name && name.length > 12 ? `${name.substring(0, 11)}...` : name;
    return (
      borderCountry && (
        <CountryBorderBox to={`/${borderCountry.alpha3Code}`}>
          {trimedCountryName}
        </CountryBorderBox>
      )
    );
  });

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
          <BordersGrid>{countryBorders}</BordersGrid>
        </ItemExtraDetails>
      </DetailsBox>
    </Container>
  );
};

export default CountryInfo;
