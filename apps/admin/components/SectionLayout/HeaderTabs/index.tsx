import { Box, Tab, Tabs } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { SectionLayoutProps } from '@/components/SectionLayout/SectionLayout';

const HeaderTabs = ({
  tabs,
  hash,
  configs,
}: SectionLayoutProps & { hash?: string | null }) => {
  const pathName = usePathname();

  if (configs?.tabVariant === 'linktabs')
    return (
      <Box className='section-layout__side horizontal-tabs'>
        <Tabs
          value={configs?.tabState?.tab}
          onChange={configs?.tabState?.changeTab}
        >
          {tabs?.map((x, idx) => (
            <Tab
              key={idx}
              value={x?.link || x?.value}
              label={
                <>
                  {x?.link && <Link href={x.link} />}
                  {x?.label}
                </>
              }
            />
          ))}
        </Tabs>
      </Box>
    );

  return (
    <Box className='section-layout__side horizontal-tabs'>
      {tabs?.map((item, index) => {
        const activeLinkClass =
          item.link && (hash === item.link || pathName.endsWith(item.link))
            ? 'side-link--active'
            : '';

        return (
          !item?.noRender &&
          item.link && (
            <Link
              className={`side-link ${activeLinkClass}`}
              key={index}
              href={item.link}
            >
              {item?.icon && <Box className='icon'>{item?.icon}</Box>}
              {item.label}
            </Link>
          )
        );
      })}
    </Box>
  );
};

export default HeaderTabs;
