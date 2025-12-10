/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Image from 'next/image';

export type CountryCodesDropdownProps = {
  data?: unknown[];
  handleChange: (e: SelectChangeEvent<number>) => void;
  value?: number;
  configs?: {
    disableFlag?: boolean;
  };
};

const CountryCodesDropdown = ({
  data = [],
  handleChange,
  value,
  configs,
}: CountryCodesDropdownProps) => (
  <FormControl className='country-select'>
    <Select
      variant='standard'
      disableUnderline
      value={value ?? 1994}
      onChange={handleChange}
      IconComponent={() => null}
    >
      <MenuItem
        value={1994}
        sx={{
          display: 'none',
        }}
      >
        Country
      </MenuItem>
      {data?.map((option: any) => {
        return (
          <MenuItem
            key={option.id}
            value={option.country_code}
            sx={{ gap: '8px' }}
          >
            {!configs?.disableFlag && (
              <Image
                src={`${option?.flag || null}`}
                width={30}
                height={20}
                alt='Flag'
                loading='eager'
                sizes='30px'
                unoptimized
              />
            )}
            <Box>+{option?.country_code}</Box>
          </MenuItem>
        );
      })}
    </Select>
  </FormControl>
);

export default CountryCodesDropdown;
