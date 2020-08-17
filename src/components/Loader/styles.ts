import styled from 'styled-components';

export const Loading = styled.div`
  margin: 10px auto;
  border: 16px solid ${props => props.theme.colors.text};
  border-top: 16px solid ${props => props.theme.colors.element};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
