import { Box, Typography } from '@mui/material';
import FeatureCard from '../feature-card';
import { FeatursContainer } from './styled';

const HomePageFeaturs = () => {
  return (
    <FeatursContainer>
      <Typography className='header'>
        Trusted by Leading Real Estate Professionals
      </Typography>
      <Box className='list'>
        {FEATURS_DATA?.map((x, idx) => (
          <FeatureCard key={idx} feature={x} />
        ))}
      </Box>
    </FeatursContainer>
  );
};

export default HomePageFeaturs;

const FEATURS_DATA = [
  {
    icon: '/ai.svg',
    iconBg: '#1A1A1A',
    label: 'AI-Powered Insights',
    decription: 'Get intelligent recommendations and predictive analytics',
  },
  {
    icon: '/security.svg',
    iconBg: '#D2FADD',
    label: 'AI-Powered Insights',
    decription: 'Get intelligent recommendations and predictive analytics',
  },
  {
    icon: '/lightning.svg',
    iconBg: '#FFEFBC',
    label: 'Lightning Fast',
    decription: 'Optimized performance for seamless experience',
  },
];
