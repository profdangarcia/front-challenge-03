interface CountryCurrency {
  code: string;
  name: string;
  symbol: string;
}

interface CountryLanguage {
  name: string;
}
export interface Country {
  name: string;
  capital: string;
  flag: string;
  population: number;
  region: string;
  subregion: string;
  alpha3Code: string;
  borders: string[];
  nativeName: string;
  topLevelDomain: string[];
  currencies: CountryCurrency[];
  languages: CountryLanguage[];
}
