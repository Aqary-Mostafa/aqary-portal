import { Grid } from '@mui/material';

import AnalysesCard from '@repo/ui/analyses-card';
import { FiUser, FiUserCheck, FiUserX } from 'react-icons/fi';

const UsersCounts = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ md: 6, xs: 12, lg: 4 }}>
        <AnalysesCard
          configs={{
            color: '#00C853',
            bgMain: '#D2FADD',
            bgSub: '#B9F6CA',
          }}
          data={{
            icon: <FiUserCheck color='#00C853' />,
            label: 'Active Users',
            value: '2',
          }}
        />
      </Grid>
      <Grid size={{ md: 6, xs: 12, lg: 4 }}>
        <AnalysesCard
          configs={{
            color: '#EEB405',
            bgMain: '#FFEDD4',
            bgSub: '#FFE88F',
          }}
          data={{
            icon: <FiUserX color='#EEB405' />,
            label: 'In - Active Users',
            value: '2',
          }}
        />
      </Grid>
      <Grid size={{ md: 6, xs: 12, lg: 4 }}>
        <AnalysesCard
          configs={{
            color: '#4880FF',
            bgMain: '#EAF1FA',
            bgSub: '#D2E5FF',
          }}
          data={{
            icon: <FiUser color='#4880FF' />,
            label: 'Total Users',
            value: '4',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default UsersCounts;
