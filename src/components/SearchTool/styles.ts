import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  background: ${props => props.theme.colors.element};
  color: ${props => props.theme.colors.input};
  display: flex;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 35px;
  box-shadow: ${props => props.theme.shadow};

  svg {
    font-size: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  margin-left: 15px;
  background: ${props => props.theme.colors.element};
  color: ${props => props.theme.colors.input};
  font-weight: 600;

  &::placeholder {
    color: ${props => props.theme.colors.input};
  }
`;
