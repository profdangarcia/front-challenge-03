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
  box-shadow: ${props => props.theme.shadow};

  &:hover {
    img {
      opacity: 0.5;
    }
  }
`;

export const ImageBox = styled.div`
  background-color: hsl(207, 26%, 17%);
  width: 100%;
  height: 140px;
  border-radius: 4px 4px 0 0;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;

  transition: opacity 0.2s ease-in-out;
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
