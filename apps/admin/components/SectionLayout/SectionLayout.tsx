'use client';

import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './section-layout.styles.scss';

import HeaderTabs from '@/components/SectionLayout/HeaderTabs';
import TitleActions, {
  TitleActionsEnums,
} from '@/components/SectionLayout/TitleActions';

import { RootState } from '@/store';

export interface SectionLayoutProps {
  children: React.ReactNode;
  header?: {
    title: React.ReactNode;
    link?: string;
    required?: boolean;
    requiredText?: string;
    actions?: (
      | {
          type: TitleActionsEnums;
          link?: string;
          action?: () => void;
          disable?: boolean;
        }
      | undefined
    )[];
  };
  links?: { label: string; link: string; noRender?: boolean }[];
  actions?: { label: string; action: () => void; isActive: boolean }[];
  tabs?: {
    label: string;
    icon?: React.ReactNode;
    link?: string;
    value?: string;
    noRender?: boolean;
  }[];
  configs?: {
    tabVariant?: 'normal' | 'linktabs';
    tabState?: {
      tab?: string;
      changeTab?: (event: React.SyntheticEvent, newValue: string) => void;
    };
  };
  noRender?: boolean;
}

export const SectionLayout = (props: SectionLayoutProps) => {
  const { links, actions, children, header, noRender, tabs, configs } = props;

  const [hash, setHash] = useState<string | null>();
  const isLink = Boolean(header?.link);
  const { theme } = useSelector((state: RootState) => state.user);
  const pathName = usePathname();
  const isDark = theme === 'dark';
  const darkClass = isDark ? 'section-layout--dark' : '';
  const isHorizontalTabs = !!tabs;

  useEffect(() => {
    const updateHash = () => {
      setHash(window?.location?.hash || '');
    };

    updateHash();

    window.addEventListener('hashchange', updateHash);

    const hashPollInterval = setInterval(() => {
      if (window?.location?.hash !== hash) {
        updateHash();
      }
    }, 100);

    return () => {
      window.removeEventListener('hashchange', updateHash);
      clearInterval(hashPollInterval);
    };
  }, [hash]);

  if (noRender) return null;

  return (
    <Box
      className={`section-layout ${darkClass} ${
        isHorizontalTabs && 'horizontal-layout'
      } ${configs?.tabVariant}`}
    >
      {links && (
        <Box className='section-layout__side'>
          {links.map((item, index) => {
            const activeLinkClass =
              hash === item.link || pathName.endsWith(item.link)
                ? // pathName.includes(item.link)
                  'side-link--active'
                : '';

            return (
              !item?.noRender && (
                <Link
                  className={`side-link ${activeLinkClass}`}
                  key={index}
                  href={item.link}
                >
                  {item.label}
                </Link>
              )
            );
          })}
        </Box>
      )}

      {tabs && <HeaderTabs hash={hash} {...props} />}
      {actions && (
        <Box className='section-layout__side'>
          {actions.map((item, index) => {
            const activeClass = item?.isActive ? 'action-btton--active' : '';

            return (
              <Box
                className={`action-btton ${activeClass}`}
                key={index}
                onClick={item?.action}
              >
                {item.label}
              </Box>
            );
          })}
        </Box>
      )}

      <Box className='section-layout__section'>
        {header && (
          <Box className='section-header'>
            <Box className='section-header__title'>
              <Box
                component={isLink ? Link : Typography}
                href={isLink ? header.link : undefined}
                textTransform='capitalize'
              >
                {isLink && <ShortcutOutlinedIcon />}
                {header?.title}
                {(header?.required || header?.requiredText) && (
                  <Box component='span' sx={{ color: 'error.main' }}>
                    {header?.requiredText ?? '*'}
                  </Box>
                )}
              </Box>
            </Box>
            <TitleActions header={header} />
          </Box>
        )}
        <Box className='section-content'>{children}</Box>
      </Box>
    </Box>
  );
};
