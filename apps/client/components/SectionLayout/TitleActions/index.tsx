import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { CiImport } from 'react-icons/ci';
import { LuTags } from 'react-icons/lu';
import { PiExportLight } from 'react-icons/pi';

import './title-actions.scss';

import { SectionLayoutProps } from '@/components/SectionLayout/SectionLayout';

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
          >
            {x?.link && <Link href={x?.link} />}
            {btnAsset?.label}
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
}

const TITLE_ACTIONS = {
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
};
