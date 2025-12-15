import { Box, Avatar, Button, Typography } from '@mui/material';

const AgentSection = () => {
  return (
    <Box
      mt={2}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box display='flex' gap={1.5} alignItems='center'>
        <Avatar />
        <Box>
          <Typography fontWeight={600}>Listing Agent</Typography>
          <Typography fontSize={13} color='text.secondary'>
            Riva CRM
          </Typography>
        </Box>
      </Box>

      <Button variant='outlined' size='small'>
        View All Properties
      </Button>
    </Box>
  );
};

export default AgentSection;
