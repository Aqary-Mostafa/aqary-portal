'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import './loading.styles.scss';

const Loading = ({ config }: { config?: { isSubWithTabs: boolean } }) => {
  const isSubWithTabsClass = config?.isSubWithTabs ? 'loading--section' : '';

  return (
    <Box className={`loading ${isSubWithTabsClass}`}>
      <Box className='loading__gif'>
        <Image src='/loader.gif' alt='aqary loading' fill />
      </Box>
    </Box>
  );
};

export default Loading;
