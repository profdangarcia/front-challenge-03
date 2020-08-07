import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  text-decoration: none;
  background: ${props => props.theme.colors.element};
  box-shadow: ${props => props.theme.shadow};
  color: ${props => props.theme.colors.text};
  padding: 5px 15px;
  display: flex;
  align-items: center;
  max-width: 90px;
  border-radius: 4px;

  button {
    color: ${props => props.theme.colors.text};
    margin-left: 3px;
    background: none;
    font-weight: 400;
  }

  svg {
    font-size: 22px;
    flex-shrink: 0;
  }
`;
