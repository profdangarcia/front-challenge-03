import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { Container } from './styles';

const ReturnButton: React.FC = () => {
  return (
    <Container to="/">
      <IoIosArrowRoundBack />
      <button type="button">Back</button>
    </Container>
  );
};

export default ReturnButton;
