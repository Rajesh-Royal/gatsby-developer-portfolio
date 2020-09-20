import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/rajesh-royal-vector-illustrator.png';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            {`Competitive Coder => () 😊 Have 🔥 to learn new things, do experiments, fix 🕷️ and write about it. I use < /> to solve my everyday problems.`}
          </p>
          <p>I enjoy building new things, contributing to the open-source community, and continuously learning.</p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem
            at a time.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
