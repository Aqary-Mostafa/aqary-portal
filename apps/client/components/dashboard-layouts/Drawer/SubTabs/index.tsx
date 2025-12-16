'use client';

import {
  Box,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';

import './sub-tabs.styles.scss';

import { RootState } from '@/store';

import { DarwerList } from '@/types/global';

const SubTabs = ({
  item,
  isOpen,
}: {
  item: DarwerList['list'][0];
  isOpen: boolean;
}) => {
  const pathname = usePathname();
  const muiTheme = useTheme();
  const { drawer, theme } = useSelector((state: RootState) => state.user);
  const activeItem =
    (item?.active && pathname.includes(item?.active)) ||
    pathname.includes(item.url);
  const t = useTranslations('Sidebar');

  const isRTL = muiTheme?.direction === 'rtl';
  const tabStyles = `tab ${isRTL ? 'tab--rtl' : ''} ${
    theme ? `tab--${theme}` : ''
  } ${activeItem ? 'tab--active' : ''}`;

  return (
    <Collapse
      in={isOpen ? isOpen : activeItem}
      timeout='auto'
      unmountOnExit
      className={`sub-tabs v2 ${
        isOpen && drawer?.isOpen ? '' : 'sub-tabs--open'
      }`}
    >
      <Tooltip
        title={drawer?.isOpen ? '' : item.label}
        placement={isRTL ? 'left' : 'right'}
      >
        <Box component={Link} className={tabStyles} href={item.url}>
          <Box className='before-box' />
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {drawer?.isOpen && <ListItemText primary={t(item.label)} />}
          </ListItemButton>
        </Box>
      </Tooltip>
    </Collapse>
  );
};

export default SubTabs;
