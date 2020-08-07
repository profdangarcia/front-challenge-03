import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 300;
  padding: 40px 0;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const SmallInfoText = styled.p`
  margin-bottom: 5px;
  strong {
    font-weight: 600;
  }
`;

export const DetailsBox = styled.div`
  .country-name {
    font-size: 18px;
    font-weight: 800;
    margin: 30px 0 15px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PrimaryDetails = styled.div`
  margin-bottom: 30px;
`;

export const SecondaryDetails = styled.div`
  margin-bottom: 20px;
`;

export const ItemExtraDetails = styled.div`
  strong {
    font-weight: 600;
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
`;

export const BordersGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(73px, 1fr));
  grid-gap: 10px;
`;

export const CountryBorderBox = styled.div`
  background: ${props => props.theme.colors.element};
  padding: 3px 25px;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow};
  font-size: 12px;
  /* margin-bottom: 5px; */
  width: 73px;
`;
