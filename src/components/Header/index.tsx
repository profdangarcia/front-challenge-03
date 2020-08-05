import React, { useContext } from 'react';
import { BsMoon } from 'react-icons/bs';
import { ThemeContext } from 'styled-components';
import Wrapper from '../Wrapper';
import { Container, Content, Title, DisplayModeButton } from './styles';

interface Props {
  toggleTheme(): void,
}

const Header: React.FC<Props> = ({toggleTheme}) => {

  const { title } = useContext(ThemeContext);

  const buttonText = title === 'dark' ? 'Light Mode' : 'Dark Mode';

  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Where in the world?</Title>
          <DisplayModeButton onClick={toggleTheme}>
            <BsMoon />
            { buttonText }
          </DisplayModeButton>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Header;
