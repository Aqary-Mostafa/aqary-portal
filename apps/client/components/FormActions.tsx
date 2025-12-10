import { Box, Button, ButtonProps } from '@mui/material';

const FormActions = ({
  submitButtonProps,
  steper,
  actions,
}: {
  submitButtonProps?: ButtonProps;
  steper?: {
    submitWhen?: boolean;
    onNext?: () => void;
  };

  actions?: {
    clear?: {
      props?: ButtonProps;
    };
  };
}) => {
  return (
    <Box className='form-actions'>
      <Button type='reset' variant='outlined' {...actions?.clear?.props}>
        {actions?.clear?.props?.children || 'clear'}
      </Button>
      {steper && !steper?.submitWhen ? (
        <Button
          variant='contained'
          type='button'
          onClick={(e) => {
            e.preventDefault();
            steper?.onNext?.();
          }}
        >
          Next
        </Button>
      ) : (
        <Button type='submit' variant='contained' {...submitButtonProps}>
          submit
        </Button>
      )}
    </Box>
  );
};

export default FormActions;
