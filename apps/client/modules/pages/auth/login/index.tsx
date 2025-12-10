'use client';

import { Container } from '@mui/material';
import { LoginContainer } from './styled';
import ImageSide from './components/image-side';
import FormSide from './components/form-side';

const AuthLoginModule = () => {
  return (
    <LoginContainer>
      <Container maxWidth='xl' className='container'>
        <ImageSide />
        <FormSide />
      </Container>
    </LoginContainer>
  );
};

export default AuthLoginModule;
