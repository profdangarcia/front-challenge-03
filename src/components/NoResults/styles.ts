import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 0 70px;
`;

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 10px;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.element};
  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 35px auto;
  color: ${props => props.theme.colors.text};

  svg {
    height: 67px;
    width: auto;
    opacity: 0.7;
  }

  .info {
    text-align: center;
    margin: 10px;
  }

  h2 {
    font-size: 18px;
    line-height: 22px;
  }

  p {
    font-size: 16px;
    line-height: 19px;
  }

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    flex-direction: row;

    svg {
      height: 178px;
    }

    .info {
      max-width: 500px;
      margin-left: -50px;
      text-align: left;
    }

    h2 {
      font-size: 22px;
      line-height: 27px;
    }

    p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
