import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 250px;
  height: 290px;
  background: ${props => props.theme.colors.element};
  color: ${props => props.theme.colors.text};
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`;

export const CardTitle = styled.h2`
  margin: 20px 15px 0;
`;

export const CardDescription = styled.div`
  padding: 15px 15px 0;

  p {
    margin-bottom: 5px;
  }
`;
