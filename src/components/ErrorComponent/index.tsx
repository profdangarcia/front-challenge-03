import React from 'react';
import { Link } from 'react-router-dom';

import { GrUnlink } from 'react-icons/gr';

import { Container, Title, Text, RoundedButton } from './styles';

const ErrorComponent: React.FC = () => {
  return (
    <>
      <Container>
        <GrUnlink />
        <div className="text">
          <Title>
            There was a problem with the page you are trying to access.
          </Title>
          <Text>
            Some server problem is currently occurring. We apologize for this,
            but we are already focused on solving it. Please try to access
            later.
          </Text>
          <Link to="/">
            <RoundedButton>TRY AGAIN</RoundedButton>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default ErrorComponent;
