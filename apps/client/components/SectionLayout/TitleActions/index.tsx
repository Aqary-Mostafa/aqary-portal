import { Box, Button, ButtonProps } from '@mui/material';
import Link from 'next/link';
import { CiImport } from 'react-icons/ci';
import { LuPencilLine, LuTags } from 'react-icons/lu';
import { PiExportLight } from 'react-icons/pi';

import './title-actions.scss';

import { SectionLayoutProps } from '@/components/SectionLayout/SectionLayout';
import { IoIosAdd } from 'react-icons/io';
import { ReactNode } from 'react';

interface TitleActionsProps {
  header: SectionLayoutProps['header'];
}

const TitleActions = ({ header }: TitleActionsProps) => {
  if (!header?.actions) return;

  return (
    <Box className='title-actions'>
      {header?.actions?.map((x, idx) => {
        if (!x?.type) return;

        const btnAsset = TITLE_ACTIONS[x?.type];
        return (
          <Button
            variant='outlined'
            key={idx}
            startIcon={btnAsset?.startIcon}
            onClick={x?.action}
            disabled={x?.disable}
            sx={{ backgroundColor: '#f8f9fa', color: '#1a1a1a' }}
            {...btnAsset?.props}
            {...x?.props}
          >
            {x?.link && <Link href={x?.link} />}
            {x?.props?.children || btnAsset?.label}
          </Button>
        );
      })}
    </Box>
  );
};

export default TitleActions;

export enum TitleActionsEnums {
  import = 'import',
  tags = 'tags',
  export = 'export',
  edit = 'edit',
  primary = 'primary',
}

type TitleActionConfig = {
  label: string;
  startIcon?: ReactNode;
  onClick?: () => void;
  props?: ButtonProps;
};

const TITLE_ACTIONS: Record<TitleActionsEnums, TitleActionConfig> = {
  [TitleActionsEnums.import]: {
    label: 'Import',
    startIcon: <CiImport />,
  },
  [TitleActionsEnums.tags]: {
    label: 'Manage Tag',
    startIcon: <LuTags />,
  },
  [TitleActionsEnums.export]: {
    label: 'Export',
    startIcon: <PiExportLight />,
  },
  [TitleActionsEnums.edit]: {
    label: 'Edit',
    startIcon: <LuPencilLine />,
  },
  [TitleActionsEnums.primary]: {
    label: 'Create',
    startIcon: <IoIosAdd />,
    props: {
      sx: {
        backgroundColor: 'primary.main',
        color: '#fff',
      },
    },
  },
};
