'use client';
import { Box, Container } from '@mui/material';
import { HomePageContainer } from './styled';
import HomeCompanyIntro from './components/intro';
import HomePageFeaturs from './components/featurs';
import HomeCta from './components/cta';

const HomeModule = () => {
  return (
    <Container maxWidth='xl'>
      <HomePageContainer>
        <HomeCompanyIntro />
        <HomeCta />
        <HomePageFeaturs />
      </HomePageContainer>
    </Container>
  );
};

export default HomeModule;
