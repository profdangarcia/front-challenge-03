import React from 'react';

import { FaSearch } from 'react-icons/fa';

import { Container, Wrapper, Content } from './styles';

const NoResults: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <FaSearch />
          <div className="info">
            <h2>Sorry...no countries have been found!</h2>
            <p>
              {`Try another search term! Maybe you'll find what you're looking for! `}
              <span role="img" aria-label="blink emoji">
                &#x1F609;
              </span>
            </p>
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default NoResults;
