import { Box, Typography } from '@mui/material';
import { AnalysesCardContainer } from './styled';
import { JSX } from 'react';

export interface AnalysesCardProps {
  configs?: {
    color?: string;
    bgMain?: string;
    bgSub?: string;
  };
  data?: {
    icon?: JSX.Element;
    label?: string;
    value?: string;
  };
}

const AnalysesCard = ({ configs, data }: AnalysesCardProps) => {
  return (
    <AnalysesCardContainer sx={{ backgroundColor: configs?.bgMain }}>
      <Box className='icon' sx={{ backgroundColor: configs?.bgSub }}>
        {data?.icon}
      </Box>
      <Box className='content'>
        <Typography className='content__label' sx={{ color: configs?.color }}>
          {data?.label}
        </Typography>
        <Typography className='content__value'>{data?.value}</Typography>
      </Box>
    </AnalysesCardContainer>
  );
};

export default AnalysesCard;
