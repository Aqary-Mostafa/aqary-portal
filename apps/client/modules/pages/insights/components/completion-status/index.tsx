'use client';

import { Box, LinearProgress } from '@mui/material';
import { FiCheckCircle } from 'react-icons/fi';

import { Root, Item } from './styled';

type CompletionItem = {
  label: string;
};

type CompletionStatusProps = {
  data: {
    items: CompletionItem[];
    completionPercentage: number;
  };
};

const CompletionStatus = ({ data }: CompletionStatusProps) => {
  const { items, completionPercentage } = data || {};

  return (
    <Root>
      {items?.map((item) => (
        <Item key={item.label}>
          <FiCheckCircle size={14} color='#22C55E' />
          <Box>{item.label}</Box>
        </Item>
      ))}

      <Box className='progress-section passed'>
        <Box>{completionPercentage}%</Box>
        <LinearProgress
          color='success'
          value={completionPercentage}
          variant='determinate'
        />
      </Box>
    </Root>
  );
};

export default CompletionStatus;
