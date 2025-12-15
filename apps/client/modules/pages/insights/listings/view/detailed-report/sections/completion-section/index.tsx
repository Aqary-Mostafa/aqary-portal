import { Box, Typography } from '@mui/material';
import { FiCheckCircle } from 'react-icons/fi';

const Item = ({ label }: { label: string }) => (
  <Box display='flex' alignItems='center' gap={1}>
    <FiCheckCircle color='#22C55E' />
    <Typography>{label}</Typography>
  </Box>
);

const CompletionSection = () => {
  return (
    <>
      <Typography fontWeight={600} mb={1}>
        Listing Completion
      </Typography>

      <Box display='grid' gridTemplateColumns='1fr 1fr' gap={1.5}>
        <Item label='Images' />
        <Item label='Description' />
        <Item label='Floor Plans' />
        <Item label='Agent Profile' />
      </Box>

      <Box mt={2} textAlign='center'>
        <FiCheckCircle size={40} color='#22C55E' />
        <Typography fontWeight={500}>
          Your Listing information is complete
        </Typography>
      </Box>
    </>
  );
};

export default CompletionSection;
