import { Box, Typography } from '@mui/material';

const PriceSection = () => {
  return (
    <Box mt={2}>
      <Typography fontWeight={600}>Your Listing Price</Typography>
      <Typography color='primary' fontWeight={700}>
        AED 100,000
      </Typography>
    </Box>
  );
};

export default PriceSection;
