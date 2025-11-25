import { Box, Button, ButtonProps } from '@mui/material';
import { useTranslations } from 'next-intl';

const FormActions = ({
  submitButtonProps,
  steper,
}: {
  submitButtonProps?: ButtonProps;
  steper?: {
    submitWhen?: boolean;
    onNext?: () => void;
  };
}) => {
  const t = useTranslations('form-actions');

  return (
    <Box className='form-actions'>
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
          {t('submit')}
        </Button>
      )}
      <Button type='reset' variant='outlined'>
        {t('clear')}
      </Button>
    </Box>
  );
};

export default FormActions;
