'use client';

import { Box, IconButton, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Root } from './styled';

export type DrawerRootProps = {
  open: boolean;
  content?: React.ReactNode;
  onClose: () => void;
};
type DrawerConfig = Omit<DrawerRootProps, 'open' | 'onClose'>;

const DrawerRoot = ({ open, content, onClose }: DrawerRootProps) => {
  return (
    <Root anchor='right' open={open} onClose={onClose}>
      <Box className='drawer-header'>
        <Typography>Detailed Report</Typography>
        <IconButton onClick={onClose}>
          <FiX size={14} />
        </IconButton>
      </Box>
      {content}
    </Root>
  );
};

export const useDrawerRoot = () => {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState<DrawerConfig | null>(null);

  const openDrawer = useCallback((drawerConfig: DrawerConfig) => {
    setConfig(drawerConfig);
    requestAnimationFrame(() => {
      setOpen(true);
    });
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    openDrawer,
    closeDrawer,
    DrawerRoot: (
      <DrawerRoot open={open} onClose={closeDrawer} content={config?.content} />
    ),
  };
};
