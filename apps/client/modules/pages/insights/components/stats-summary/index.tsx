'use client';

import { Box, Typography } from '@mui/material';
import { FiEye, FiMousePointer, FiUserPlus, FiFileText } from 'react-icons/fi';

import { CardRoot, Row, IconWrapper, ActionButton } from './styled';

type StatItem = {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: string;
  bgColor: string;
};

type StatsSummaryProps = {
  data: {
    impressions: number;
    clicks: number;
    leads: number;
  };
  actions?: {
    onReportClick?: () => void;
  };
};

const StatsSummary = ({ data, actions }: StatsSummaryProps) => {
  const { impressions, clicks, leads } = data;
  const { onReportClick } = actions || {};

  const stats: StatItem[] = [
    {
      icon: <FiEye />,
      value: impressions,
      label: 'Impressions',
      color: '#3A71ED',
      bgColor: '#E0E6ED',
    },
    {
      icon: <FiMousePointer />,
      value: clicks,
      label: 'Clicks',
      color: '#EEB405',
      bgColor: '#FFEFBC',
    },
    {
      icon: <FiUserPlus />,
      value: leads,
      label: 'Leads',
      color: '#00C853',
      bgColor: '#D2FADD',
    },
  ];

  return (
    <CardRoot>
      {stats.map((item) => (
        <Row key={item.label}>
          <IconWrapper
            label={item.icon}
            sx={{ backgroundColor: item.bgColor, color: item.color }}
          />
          <Box className='info'>
            <Typography className='value'>
              {item.value?.toLocaleString()}
            </Typography>
            <Typography>{item.label}</Typography>
          </Box>
        </Row>
      ))}

      <ActionButton
        variant='outlined'
        startIcon={<FiFileText />}
        fullWidth
        size='small'
        onClick={onReportClick}
      >
        Detailed Report
      </ActionButton>
    </CardRoot>
  );
};

export default StatsSummary;
