import { TitleActionsEnums } from '@/components/SectionLayout/TitleActions';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import {
  Alert,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
} from '@mui/material';
import { UserInformationContainer } from './styled';
import { Dispatch, SetStateAction, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  userPasswordSchema,
  userPasswordSchemaSchemaFormValues,
} from '../validations';
import { RxCrossCircled } from 'react-icons/rx';
import FormActions from '@/components/FormActions';

import IconLabelValue from '@repo/ui/icon-label-value';
import { IoCheckmark, IoLockClosedOutline } from 'react-icons/io5';
import { consoleLog } from '@/utils/console-log';

const UserPassword = () => {
  const [current, setCurrent] = useState('view');
  const isEdit = current === 'edit';
  const isView = current === 'view';

  return (
    <SectionLayout
      header={{
        title: isEdit ? 'Edit Password' : 'Password',
        actions: [
          isView
            ? {
                type: TitleActionsEnums.edit,
                action: () => setCurrent('edit'),
              }
            : undefined,
        ],
      }}
    >
      <UserInformationContainer>
        {isView && <View />}
        {isEdit && <Edit setCurrent={setCurrent} />}
      </UserInformationContainer>
    </SectionLayout>
  );
};
export default UserPassword;

const GRID_SIZES = {
  md: 6,
  xs: 12,
};
const Edit = ({
  setCurrent,
}: {
  setCurrent: Dispatch<SetStateAction<string>>;
}) => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<userPasswordSchemaSchemaFormValues>({
    resolver: zodResolver(userPasswordSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<userPasswordSchemaSchemaFormValues> = async (
    data,
  ) => {
    consoleLog({ data });
  };

  const PASS_CHECKS = [
    {
      label: '8 characters',
      logic: (pass: string) => pass?.length >= 8,
    },
    {
      label: '1 number',
      logic: (pass: string) => /[0-9]/.test(pass),
    },
    {
      label: '1 special character',
      logic: (pass: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pass),
    },
    {
      label: '1 lowercase character',
      logic: (pass: string) => /[a-z]/.test(pass),
    },
    {
      label: '1 uppercase character',
      logic: (pass: string) => /[A-Z]/.test(pass),
    },
  ];

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid size={GRID_SIZES}>
          <Controller
            name='password'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <FormControl data-testid='password'>
                <FormLabel>Create Password</FormLabel>
                <TextField
                  placeholder='Create Password'
                  type='password'
                  {...field}
                />
                <FormHelperText>{'Please enter password'}</FormHelperText>
              </FormControl>
            )}
          />
        </Grid>
        <Grid size={GRID_SIZES}>
          <Controller
            name='password_confirm'
            control={control}
            defaultValue=''
            render={({ field, fieldState: { error } }) => (
              <FormControl error={!!error} data-testid='password_confirm'>
                <FormLabel>Confirm Password</FormLabel>
                <TextField
                  placeholder='Confirm Password'
                  error={!!error}
                  type='password'
                  {...field}
                />
                <FormHelperText>
                  {error?.message ?? 'Please re-enter password'}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Grid>
        {errors?.password && (
          <Grid size={{ xs: 12 }}>
            <Box className='password-checklist'>
              <Alert severity={errors?.password ? 'error' : 'success'}>
                {errors?.password
                  ? 'Password must contain at least: /Info/.'
                  : 'Strong password.'}
              </Alert>
              <Box component='ul' className='list'>
                {PASS_CHECKS?.map((x, idx) => {
                  const passed = x?.logic(password);

                  return (
                    <Box className='list__item' component='li' key={idx}>
                      {passed ? (
                        <IoCheckmark color='var(--mui-palette-success-main)' />
                      ) : (
                        <RxCrossCircled />
                      )}
                      {x?.label}
                    </Box>
                  );
                })}
                {/* <Box className='list__item' component='li'>
                <RxCrossCircled /> 8 characters
              </Box>
              <Box className='list__item' component='li'>
                <IoCheckmark color='var(--mui-palette-success-main)' /> 1 number
              </Box> */}
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
      <FormActions
        actions={{
          clear: {
            props: {
              onClick: () => setCurrent('view'),
              children: 'cancel',
            },
          },
        }}
      />
    </form>
  );
};

const View = () => {
  const INFO_DATA = [
    {
      icon: <IoLockClosedOutline color='var(--mui-palette-primary-main)' />,
      label: 'Password',
      value: '***********',
    },
  ];
  return (
    <Grid container spacing={3}>
      {INFO_DATA?.map((x, idx) => (
        <Grid key={idx} size={{ xs: 12 }}>
          <IconLabelValue icon={x?.icon} label={x?.label} value={x?.value} />
        </Grid>
      ))}
    </Grid>
  );
};
