import { Chip, Typography } from '@mui/material';
import { JSX } from 'react';
import { IconLabelValueContainer } from './styled';

export interface IconLabelValueProps {
  icon: JSX.Element;
  label: string;
  value: string;
}

const IconLabelValue = ({ icon, label, value }: IconLabelValueProps) => {
  return (
    <IconLabelValueContainer>
      <Chip label={icon} />
      <Typography className='label'>{label}</Typography>:
      <Typography>{value}</Typography>
    </IconLabelValueContainer>
  );
};

export default IconLabelValue;
