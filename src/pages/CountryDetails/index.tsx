import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../components/Wrapper';

import { Container, Content } from './styles';

const CountryDetails: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Link to="/">
            <button type="button">Voltar</button>
          </Link>
          <h1>FOI!</h1>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default CountryDetails;
