import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import { FormContent, FormHeader, SideFormConatiner } from './styled';
import { signIn } from '@/utils/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { closeConnection } from '@/store/slices/notification';
import { AlertBar, AlertBarProps } from '@/components/AlertBar';

const zodSchema = z.object({
  user: z.string().min(1, { message: 'Email/User has to be filled.' }),
  password: z.string().min(1, { message: 'Password has to be filled.' }),
  remmemberme: z.string(),
});

type FormValues = z.infer<typeof zodSchema>;

const FormSide = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = React.useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );
  const dispatch = useDispatch();
  const [alertBarProps, setAlertBarProps] = React.useState<AlertBarProps>({
    message: '',
    severity: 'info',
  });
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(zodSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();
    if (data['user'].includes('@')) formData.append('email', data['user']);
    else formData.append('username', data['user']);
    formData.append('password', data['password']);
    formData.append('remmemberme', data['remmemberme']);

    const isLogged = await signIn(formData);

    if (isLogged === 'success') {
      const isRedirect = params.get('next');
      dispatch(closeConnection(false));

      if (isRedirect) router.push(isRedirect);
      else router.push('/dashboard/account/me');
    } else {
      setAlertBarProps({
        message: isLogged,
        severity: 'error',
      });
    }
  };

  return (
    <>
      <SideFormConatiner>
        <FormHeader>
          <Image src={'/logo.svg'} alt='Aqary logo' width={383} height={110} />
          <Typography component='p'>Property Management Platform</Typography>
        </FormHeader>
        <FormContent onSubmit={handleSubmit(onSubmit)}>
          <Box className='head'>
            <Typography className='head__main'>
              Log in to Your Account
            </Typography>
            <Typography className='head__sub'>
              Manage your properties with ease
            </Typography>
          </Box>
          <Controller
            name='user'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <FormControl>
                <FormLabel>User Name</FormLabel>
                <TextField
                  {...field}
                  placeholder='admin@aqaryint.com'
                  error={!!errors?.user?.message}
                  type='text'
                />
                {errors.user && (
                  <FormHelperText error={!!errors?.user?.message}>
                    {errors.user.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
          <Controller
            name='password'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <FormControl>
                <FormLabel>Password</FormLabel>
                <TextField
                  {...field}
                  placeholder='Enter your password'
                  type={showPassword ? 'text' : 'password'}
                  error={!!errors?.password?.message}
                  autoComplete='off'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge='end'
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.password && (
                  <FormHelperText error={!!errors?.password?.message}>
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
          <Box className='actions'>
            <Controller
              name='remmemberme'
              control={control}
              defaultValue='false'
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      onChange={(e) =>
                        setValue(
                          'remmemberme',
                          JSON.stringify(e.target.checked),
                        )
                      }
                    />
                  }
                  label='Remember Me'
                />
              )}
            />
          </Box>
          <Button
            variant='contained'
            type='submit'
            fullWidth
            disabled={!!isSubmitting}
          >
            {isSubmitting ? 'Logging.....' : 'Log in'}
          </Button>
        </FormContent>
      </SideFormConatiner>
      <AlertBar
        onClose={() => setAlertBarProps({ message: '' })}
        {...alertBarProps}
      />
    </>
  );
};

export default FormSide;
