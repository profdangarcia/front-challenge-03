import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.bg};
  padding: 30px 0;
  color: ${props => props.theme.colors.text};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`

`;

export const DisplayModeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  color: ${props => props.theme.colors.text};
  width: 100px;
`;
