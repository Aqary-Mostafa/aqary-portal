import { Box, Typography } from '@mui/material';
import { FeatureContainer } from './styled';
import Image from 'next/image';

export interface FeatureType {
  icon: string;
  iconBg: string;
  label: string;
  decription: string;
}

export interface FeatureCardProps {
  feature: FeatureType;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <FeatureContainer>
      <Box className='icon' sx={{ backgroundColor: feature?.iconBg }}>
        <Image
          src={feature?.icon}
          alt={feature?.label}
          width={28}
          height={28}
        />
      </Box>

      <Box className='content'>
        <Typography className='content__main' component='h3'>
          {feature?.label}
        </Typography>
        <Typography className='content__sub' component='h4'>
          {feature?.decription}
        </Typography>
      </Box>
    </FeatureContainer>
  );
};

export default FeatureCard;
