import styled from 'styled-components';

export const Container = styled.div`
  max-width: 260px;
  background: ${props => props.theme.colors.element};
  color: ${props => props.theme.colors.text};
  border-radius: 4px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px 4px 0 0;
`;

export const CardTitle = styled.h2`
  margin: 20px 15px 0;
`;

export const CardDescription = styled.div`
  padding: 15px 15px 0;
`;
