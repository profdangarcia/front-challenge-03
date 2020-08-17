import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.text};
`;

export const Content = styled.div``;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const CountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  align-items: center;

  a {
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
    grid-gap: 45px;
    justify-content: flex-start;
    a {
      margin-bottom: 5px;
    }
  }
`;
