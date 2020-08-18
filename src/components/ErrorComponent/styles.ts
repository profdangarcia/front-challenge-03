import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.element};
  margin: 15px auto 30px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 6px;

  .text {
    text-align: center;
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    height: 67px;
    width: auto;
    margin-bottom: 20px;
    opacity: 0.5;
    path {
      stroke: ${props => props.theme.colors.text};
    }
  }

  a {
    text-decoration: none;
    width: 100%;
    max-width: 260px;
  }

  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    flex-direction: row;
    align-items: center;
    padding: 60px 0;
    margin: 20px auto 70px;
    .text {
      max-width: 500px;
      margin: 0 -40px;
    }
    svg {
      height: 163px;
    }
  }
`;

export const Title = styled.h2`
  opacity: 0.9;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  font-weight: 800;
  margin: 0 auto 20px;
  @media screen and (min-width: ${props =>
      props.theme.sizes.mediumScreenSize}) {
    max-width: 460px;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 21px;
  margin: 0 auto 20px;
  max-width: 520px;
  font-weight: 600;
`;

export const RoundedButton = styled.button`
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 25px;
  border: 2px solid;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;
