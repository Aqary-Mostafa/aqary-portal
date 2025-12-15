import { Box, Typography } from '@mui/material';
import { FiEye, FiMousePointer, FiTrendingUp } from 'react-icons/fi';

const Stat = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <Box display='flex' gap={1.5} alignItems='center'>
    {icon}
    <Box>
      <Typography fontSize={13} color='text.secondary'>
        {label}
      </Typography>
      <Typography fontWeight={600}>{value}</Typography>
    </Box>
  </Box>
);

const PerformanceStats = () => {
  return (
    <>
      <Typography fontWeight={600} mb={1}>
        Listing Performance
      </Typography>

      <Box display='grid' gridTemplateColumns='1fr 1fr' gap={2}>
        <Stat icon={<FiEye />} label='Impressions' value='10,293' />
        <Stat icon={<FiMousePointer />} label='Clicks' value='8,874' />
        <Stat icon={<FiTrendingUp />} label='Click Rate' value='2,432' />
      </Box>
    </>
  );
};

export default PerformanceStats;
