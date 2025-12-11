import { TitleActionsEnums } from '@/components/SectionLayout/TitleActions';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { MdOutlineMail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { UserProfileContainer } from './styled';
import { Dispatch, SetStateAction, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  userInformationSchema,
  userInformationSchemaFormValues,
  userProfileSchema,
  userProfileSchemaSchemaFormValues,
} from '../validations';
import CountryCodesDropdown from '@repo/ui/CountryCodesDropdown';
import FormActions from '@/components/FormActions';
import Image from 'next/image';
import { UploadFile } from '@mui/icons-material';
import { IoCameraOutline } from 'react-icons/io5';

const UserProfile = () => {
  const [current, setCurrent] = useState('view');
  const isEdit = current === 'edit';
  const isView = current === 'view';

  const { control, watch, reset } = useForm<userProfileSchemaSchemaFormValues>({
    resolver: zodResolver(userProfileSchema),
  });

  const cover = watch('cover');
  const coverUrl = cover && URL.createObjectURL(cover[0]);

  const portrait = watch('portrait');
  const portraitUrl = portrait && URL.createObjectURL(portrait[0]);

  return (
    <SectionLayout
      header={{
        title: isEdit ? 'Edit User Profile' : 'User Profile',
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
      <UserProfileContainer>
        <form>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <Box className='cover'>
                <Image
                  src={coverUrl || '/default-bg.png'}
                  fill
                  alt='use cover image'
                />
                {isEdit && (
                  <Box className='cover__input'>
                    <Button className='btn'>
                      <IoCameraOutline fontSize={20} />
                      Change Cover
                    </Button>
                    <Controller
                      name='cover'
                      control={control}
                      render={({
                        field: { onChange, ...rest },
                        fieldState: { error },
                      }) => (
                        <TextField
                          {...rest}
                          type='file'
                          className='input'
                          value={watch('cover')?.name}
                          onChange={(e) => {
                            const files = (e.target as HTMLInputElement)?.files;
                            onChange(files);
                          }}
                          inputProps={{
                            accept: 'image/*',
                            endadornment: (
                              <InputAdornment position='end'>
                                <UploadFile />
                              </InputAdornment>
                            ),
                          }}
                          error={!!error}
                        />
                      )}
                    />
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box className='portrait'>
                <Box className='image-container'>
                  <Image
                    src={portraitUrl || '/default-bg.png'}
                    fill
                    alt='use cover image'
                  />
                </Box>
                <Box className='content'>
                  <Typography className='name'>Zara Hassan</Typography>
                  {isEdit && (
                    <>
                      <Box className='portrait__input'>
                        <Button className='btn'>
                          <IoCameraOutline fontSize={20} />
                          Change Photo
                        </Button>
                        <Controller
                          name='portrait'
                          control={control}
                          render={({
                            field: { onChange, ...rest },
                            fieldState: { error },
                          }) => (
                            <TextField
                              {...rest}
                              type='file'
                              className='input'
                              value={watch('portrait')?.name}
                              onChange={(e) => {
                                const files = (e.target as HTMLInputElement)
                                  ?.files;
                                onChange(files);
                              }}
                              inputProps={{
                                accept: 'image/*',
                                endadornment: (
                                  <InputAdornment position='end'>
                                    <UploadFile />
                                  </InputAdornment>
                                ),
                              }}
                              error={!!error}
                            />
                          )}
                        />
                      </Box>
                      <Typography className='helper'>
                        JPG, PNG or JPEG (max 2MB)
                      </Typography>
                    </>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
          {isEdit && (
            <FormActions
              actions={{
                clear: {
                  props: {
                    onClick: () => {
                      setCurrent('view');
                      reset();
                    },
                    children: 'cancel',
                  },
                },
              }}
            />
          )}
        </form>
      </UserProfileContainer>
    </SectionLayout>
  );
};
export default UserProfile;

const GRID_SIZES = {
  lg: 4,
  md: 6,
  xs: 12,
};
const Edit = ({
  setCurrent,
}: {
  setCurrent: Dispatch<SetStateAction<string>>;
}) => {
  const { control, watch, setValue } = useForm<userInformationSchemaFormValues>(
    {
      resolver: zodResolver(userInformationSchema),
    },
  );

  return (
    <form>
      <Grid container spacing={3}>
        <Grid size={GRID_SIZES}>
          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({ field, fieldState: { error } }) => (
              <FormControl error={!!error} data-testid='email'>
                <FormLabel>Email</FormLabel>
                <TextField
                  placeholder='Email address'
                  error={!!error}
                  {...field}
                />
                <FormHelperText>
                  {error?.message ?? 'Please enter email address'}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Grid>

        <Grid size={GRID_SIZES}>
          <Controller
            name='phone'
            control={control}
            defaultValue={watch('phone')}
            render={({ field, fieldState: { error } }) => (
              <FormControl error={!!error} data-testid='contact-phone'>
                <FormLabel>Number</FormLabel>
                <TextField
                  {...field}
                  placeholder='Enter Number'
                  type='number'
                  error={!!error}
                  value={field.value}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '') field.onChange(undefined);
                    else field.onChange(value);
                  }}
                  InputProps={{
                    startAdornment: (
                      <CountryCodesDropdown
                        data={[]}
                        value={watch('phone_code')}
                        handleChange={(e) =>
                          setValue('phone_code', Number(e?.target?.value))
                        }
                      />
                    ),
                  }}
                  sx={{
                    'input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button':
                      {
                        WebkitAppearance: 'none',
                        margin: '0',
                      },
                  }}
                />
                <FormHelperText>
                  {error?.message ?? 'Enter Number'}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Grid>

        <Grid size={GRID_SIZES}>
          <Controller
            name='landline'
            control={control}
            defaultValue={watch('landline')}
            render={({ field, fieldState: { error } }) => (
              <FormControl error={!!error} data-testid='landline'>
                <FormLabel>Landline</FormLabel>
                <TextField
                  {...field}
                  placeholder='Enter Landline'
                  type='number'
                  error={!!error}
                  value={field.value}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '') field.onChange(undefined);
                    else field.onChange(value);
                  }}
                  InputProps={{
                    startAdornment: (
                      <CountryCodesDropdown
                        data={[]}
                        value={watch('landline_code')}
                        handleChange={(e) =>
                          setValue('landline_code', Number(e?.target?.value))
                        }
                      />
                    ),
                  }}
                  sx={{
                    'input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button':
                      {
                        WebkitAppearance: 'none',
                        margin: '0',
                      },
                  }}
                />
                <FormHelperText>
                  {error?.message ?? 'Enter Landline'}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Grid>

        <Grid size={GRID_SIZES}>
          <Controller
            name='landline'
            control={control}
            defaultValue={watch('landline')}
            render={({ field, fieldState: { error } }) => (
              <FormControl error={!!error} data-testid='landline'>
                <FormLabel>WhatsApp</FormLabel>
                <TextField
                  {...field}
                  placeholder='Enter WhatsApp'
                  type='number'
                  error={!!error}
                  value={field.value}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '') field.onChange(undefined);
                    else field.onChange(value);
                  }}
                  InputProps={{
                    startAdornment: (
                      <CountryCodesDropdown
                        data={[]}
                        value={watch('landline_code')}
                        handleChange={(e) =>
                          setValue('landline_code', Number(e?.target?.value))
                        }
                      />
                    ),
                  }}
                  sx={{
                    'input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button':
                      {
                        WebkitAppearance: 'none',
                        margin: '0',
                      },
                  }}
                />
                <FormHelperText>
                  {error?.message ?? 'Enter WhatsApp'}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Grid>
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
      icon: <MdOutlineMail color='var(--mui-palette-primary-main)' />,
      label: 'Email',
      value: 'aswathichandran@aqaryaid.com',
    },
    {
      icon: <FiPhone color='var(--mui-palette-primary-main)' />,
      label: 'Phone',
      value: '+971 98765432',
    },
    {
      icon: <FiPhone color='var(--mui-palette-primary-main)' />,
      label: 'Landline',
      value: '123',
    },
  ];
  return (
    <Grid container spacing={3}>
      {INFO_DATA?.map((x, idx) => (
        <Grid key={idx} size={{ xs: 12 }}>
          <Box className='user-item'>
            <Chip label={x?.icon} />
            <Typography className='user-item__label'>{x?.label}</Typography>:
            <Typography>{x?.value}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
