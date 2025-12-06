import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useSelector } from 'react-redux';

import './list.styles.scss';

import SubTabs from '../../SubTabs';

import { RootState } from '@/store';

import { DarwerList } from '@/types/global';

const DrawerListItem = ({
  data,
  permissions,
}: {
  data: DarwerList;
  permissions?: boolean | number[];
}) => {
  const { drawer } = useSelector((state: RootState) => state.user);
  const pathname = usePathname();
  const [openSub, setOpenSub] = React.useState(false);
  const theme = useTheme();
  const t = useTranslations('Sidebar');

  const activeHead = pathname.includes(data.head.url);
  const isRTL = theme.direction === 'rtl';

  return (
    <>
      <List component='nav' className={`drawer-item v2`}>
        <Tooltip
          title={drawer?.isOpen ? '' : data.head.label}
          placement={isRTL ? 'left' : 'right'}
        >
          <ListItemButton
            onClick={() => setOpenSub((perv) => !perv)}
            className={`
              drawer-item__header 
              ${activeHead ? 'drawer-item__header--active' : ''}
              drawer-item__header--${theme.direction}
            `}
          >
            <ListItemIcon>{data.head.icon}</ListItemIcon>
            {drawer?.isOpen && <ListItemText primary={t(data.head.label)} />}
          </ListItemButton>
        </Tooltip>
        {data.list.map((x, idx) => {
          if (typeof permissions === 'boolean' && !permissions) return;
          if (Array.isArray(permissions) && !permissions?.includes(x?.id))
            return;

          return <SubTabs item={x} key={idx} isOpen={openSub} />;
        })}
      </List>
      <Divider />
    </>
  );
};

export default DrawerListItem;
