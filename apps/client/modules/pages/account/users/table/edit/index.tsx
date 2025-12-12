import { Grid } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import FormActions from '@/components/FormActions';

export interface UserTableEditProps {
  setCurrent: Dispatch<SetStateAction<string>>;
}

const UsersTableEdit = ({ setCurrent }: UserTableEditProps) => {
  // const isEdit = current === 'edit';
  // const isView = current === 'view';

  // const { control, watch, setValue } = useForm<accountUserFormValues>({
  //   resolver: zodResolver(accountUser),
  // });

  return (
    <form>
      <Grid container spacing={3}>
        edit
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
export default UsersTableEdit;
