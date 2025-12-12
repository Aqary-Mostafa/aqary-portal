import { TextField, Select, MenuItem, Button, Box } from '@mui/material';
import { FilterConfig, ActionConfig } from './types';
import { ColumnFiltersContainer } from './styled';

type ColumnFiltersProps = {
  filters?: FilterConfig[];
  actions?: ActionConfig[];
};

const ColumnFilters = ({ filters = [], actions = [] }: ColumnFiltersProps) => {
  return (
    <ColumnFiltersContainer>
      <Box className='filters'>
        {filters.map((filter) => {
          if (filter.type === 'search') {
            return (
              <TextField
                className='search'
                key={filter.key}
                placeholder={filter.placeholder}
                value={filter.value}
                onChange={(e) => filter?.onChange?.(e.target.value)}
                size='small'
              />
            );
          }

          if (filter.type === 'select') {
            return (
              <Select
                key={filter.key}
                value={filter.value}
                onChange={(e) => filter?.onChange?.(e.target.value)}
                size='small'
                displayEmpty
              >
                <MenuItem value=''>{filter.label}</MenuItem>
                {filter?.options?.map((opt) => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            );
          }

          return null;
        })}
      </Box>

      <Box display='flex' gap={1} className='actions'>
        {actions.map((action) => (
          <Button
            key={action.key}
            onClick={action.onClick}
            disabled={action.disabled}
            variant='outlined'
            startIcon={action?.icon}
          >
            {action.label}
          </Button>
        ))}
      </Box>
    </ColumnFiltersContainer>
  );
};

export default ColumnFilters;
