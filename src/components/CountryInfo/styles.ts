import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 400;
  padding: 40px 0;

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    width: 580px;
    height: 340px;
    margin-right: 100px;
  }
`;

export const SmallInfoText = styled.p`
  margin-bottom: 5px;
  strong {
    font-weight: 600;
  }
`;

export const DetailsBox = styled.div`
  width: 100%;
  .country-name {
    font-size: 18px;
    font-weight: 800;
    margin: 30px 0 15px;
  }

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    .country-name {
      font-size: 26px;
    }
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

export const PrimaryDetails = styled.div`
  margin-bottom: 30px;
  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    margin-bottom: 0px;
  }
`;

export const SecondaryDetails = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    margin-bottom: 0px;
  }
`;

export const ItemExtraDetails = styled.div`
  strong {
    font-weight: 600;
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    display: flex;
    align-items: center;
    strong {
      display: inline-block;
      width: auto;
      height: 100%;
      margin-bottom: 5px;
    }
  }
`;

export const BordersGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(73px, 1fr));
  grid-gap: 10px;

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    display: flex;
    width: auto;
    flex-wrap: wrap;
  }
`;

export const CountryBorderBox = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.element};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 95.5px;
  padding: 3px 12px;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow};
  font-size: 12px;

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    margin: 0 0 5px 10px;
  }
`;
