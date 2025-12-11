import { TitleActionsEnums } from '@/components/SectionLayout/TitleActions';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { UserProfileContainer } from './styled';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  userProfileSchema,
  userProfileSchemaSchemaFormValues,
} from '../validations';
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
