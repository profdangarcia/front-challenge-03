import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.element};
  padding: 30px 0;
  color: ${props => props.theme.colors.text};
  box-shadow: ${props => props.theme.shadow};
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 16px;

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    font-size: 20px;
  }
`;

export const DisplayModeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  color: ${props => props.theme.colors.text};
  width: 100px;
  font-weight: 600;
`;
