import { IconButton, styled } from '@mui/material';
import Link from 'next/link';
import { IoSettingsOutline } from 'react-icons/io5';

export interface TabLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const TabLink = ({ href, label, icon }: TabLinkProps) => {
  return (
    <TabLinkContainer href={href}>
      <IconButton>
        {icon || <IoSettingsOutline />}
        {label}
      </IconButton>
    </TabLinkContainer>
  );
};

export default TabLink;

const TabLinkContainer = styled(Link)(({ theme }) => ({
  width: '100%',
  textDecoration: 'none',

  '& .MuiIconButton-root': {
    width: '100%',
    borderRadius: theme.spacing(2),
    height: theme.spacing(108 / 8),
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(20 / 8),
    color: theme.palette.text.primary,
    backgroundColor: '#F8FAFC',
    border: '1px solid #EEF2F6',

    '& svg': {
      fontSize: '33px',
    },
  },
}));
