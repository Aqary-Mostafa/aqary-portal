import { Stack, styled, StackProps } from '@mui/material';

export const HomePageContainer = styled(Stack)<StackProps>(() => ({
  minHeight: '100dvh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F8F9FA',
  flexDirection: 'column',
  gap: '44px',
})) as typeof Stack;
