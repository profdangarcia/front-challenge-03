import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.text};
`;

export const Content = styled.div``;

export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  div {
    margin-bottom: 30px;
  }
`;
