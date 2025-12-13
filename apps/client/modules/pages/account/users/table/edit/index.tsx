import { Grid, Tab, Tabs } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import FormActions from '@/components/FormActions';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { UsersTableEditContainer } from './styled';

export interface UserTableEditProps {
  setCurrent: Dispatch<SetStateAction<string>>;
}

const UsersTableEdit = ({ setCurrent }: UserTableEditProps) => {
  const [tab, setTab] = useState(TABS[0]?.id);

  return (
    <UsersTableEditContainer>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <SectionLayout>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <Tabs value={tab} onChange={(_, val) => setTab(val)}>
                  {TABS?.map((x) => (
                    <Tab label={x?.label} value={x?.id} key={x?.id} />
                  ))}
                </Tabs>
              </Grid>
              <Grid size={{ xs: 12 }}>sd</Grid>
            </Grid>
          </SectionLayout>
        </Grid>
        <Grid size={{ xs: 12 }}>
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
        </Grid>
      </Grid>
    </UsersTableEditContainer>
  );
};
export default UsersTableEdit;

const TABS = [
  {
    id: 'user_details',
    label: 'User Details',
  },
  {
    id: 'user_information',
    label: 'User Information',
  },
  {
    id: 'manage_document',
    label: 'Manage Document',
  },
  {
    id: 'social_media',
    label: 'Social Media',
  },
];
