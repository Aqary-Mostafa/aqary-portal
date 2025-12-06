import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { IntroContainer } from './styled';

const HomeCompanyIntro = () => {
  return (
    <IntroContainer>
      <Box className='logo'>
        <Image src='/logo.svg' alt='Aqary logo' fill />
      </Box>
      <Box className='heading'>
        <Typography className='heading__main' component='h1'>
          Welcome to Aqary
        </Typography>
        <Typography className='heading__sub' component='h5'>
          AI-powered real estate management platform for modern property
          professionals
        </Typography>
      </Box>
    </IntroContainer>
  );
};

export default HomeCompanyIntro;
