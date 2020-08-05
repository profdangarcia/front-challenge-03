import React from 'react';

import Wrapper from '../../components/Wrapper';
import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h1>Home</h1>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Home;
