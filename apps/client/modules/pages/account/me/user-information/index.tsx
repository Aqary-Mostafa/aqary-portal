import { TitleActionsEnums } from '@/components/SectionLayout/TitleActions';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { MdOutlineMail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { UserInformationContainer } from './styled';
import { Dispatch, SetStateAction, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  userInformationSchema,
  userInformationSchemaFormValues,
} from '../validations';
import CountryCodesDropdown from '@repo/ui/CountryCodesDropdown';
import FormActions from '@/components/FormActions';
import { consoleLog } from '@/utils/console-log';

const UserInformation = () => {
  const [current, setCurrent] = useState('view');
  const isEdit = current === 'edit';
  const isView = current === 'view';

  return (
    <SectionLayout
      header={{
        title: isEdit ? 'Edit User Information' : 'User Information',
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
export default UserInformation;

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
