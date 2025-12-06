import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import './drawer-list.styles.scss';

import DrawerListItem from './item';

import { RootState } from '@/store';

import { V2_DEMO } from '@/constants';
import { INITIAL_LIST } from '@/constants/crm-drawer';

import { DarwerList } from '@/types/global';

const DrawerList = () => {
  const { _permissions } = useSelector((state: RootState) => state.user);

  return (
    <Box className={`darwer-list ${V2_DEMO() ? 'v2' : ''}`}>
      {INITIAL_LIST?.map((x, idx) => {
        if (typeof _permissions === 'boolean' && !_permissions) return;
        if (
          Array.isArray(_permissions) &&
          !(_permissions as number[])?.includes(x?.id)
        )
          return;

        return (
          <DrawerListItem
            key={`${x.id}-${idx}`}
            data={x.data as unknown as DarwerList}
            permissions={_permissions}
          />
        );
      })}
    </Box>
  );
};

export default DrawerList;
