import styled from 'styled-components';

export const Container = styled.select`
  margin-bottom: 35px;
  width: 200px;
  padding: 15px;
  background: ${props => props.theme.colors.element};
  color: ${props => props.theme.colors.text};
  border-radius: 6px;

  option {
    background: ${props => props.theme.colors.element};
    color: ${props => props.theme.colors.text};
    margin: 10px 0;
  }
`;
