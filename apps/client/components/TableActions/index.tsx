import {
  Box,
  IconButton,
  IconButtonOwnProps,
  Popover,
  Tooltip,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

import './table-actions.styles.scss';

import {
  primaryVariants,
  SecondaryVariants,
} from '@/components/TableActions/helpers/buttonsData';
import {
  PrimaryActions,
  SecondaryActions,
} from '@/components/TableActions/helpers/propsTypes';

type TableActionsProps = {
  actions: {
    primary?: PrimaryActions;
    secondary?: SecondaryActions;
  };
};

const TableActions = ({ actions }: TableActionsProps) => {
  const t = useTranslations('table');
  const [moreActionsAnchorEl, setMoreActionsAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  const openMoreActions = Boolean(moreActionsAnchorEl);
  const moreActionsId = openMoreActions ? 'actions-popover' : undefined;

  const primaryKeys = Object.keys(primaryVariants);
  const secondaryKeys = Object.keys(SecondaryVariants);

  return (
    <Box className='table-actions'>
      {/* Render primary actions */}
      {primaryKeys?.map((x) => {
        const primaryVariant =
          primaryVariants[x as keyof typeof primaryVariants];
        const primaryBtnAction =
          actions.primary?.[x as keyof typeof actions.primary];

        if (primaryBtnAction)
          return (
            <Tooltip key={x} title={t(primaryVariant?.label)}>
              <Typography component='span'>
                <IconButton
                  className='primary-btn'
                  color={primaryVariant?.color as IconButtonOwnProps['color']}
                  sx={{
                    color: primaryBtnAction?.sxColor || primaryVariant?.sxColor,
                  }}
                  onClick={primaryBtnAction?.action}
                  disabled={primaryBtnAction?.disabled ?? false}
                >
                  {primaryBtnAction?.link && (
                    <Link
                      className='active-link'
                      href={primaryBtnAction?.link}
                      target={primaryBtnAction?.target || '_self'}
                    />
                  )}
                  {/* {primaryVariant?.icon} */}
                  {primaryVariant?.icon &&
                    React.cloneElement(primaryVariant.icon, {
                      ...primaryBtnAction?.iconProps,
                    })}
                </IconButton>
              </Typography>
            </Tooltip>
          );
      })}

      {/* Render secondary actions */}
      {actions?.secondary && (
        <IconButton
          className='secondary-actions-btn'
          onClick={(e) => setMoreActionsAnchorEl(e.currentTarget)}
          data-testid='secondary-actions'
        >
          <BsThreeDots />
        </IconButton>
      )}
      <Popover
        id={moreActionsId}
        open={openMoreActions}
        anchorEl={moreActionsAnchorEl}
        onClose={() => setMoreActionsAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {secondaryKeys?.map((x) => {
          const primaryVariant =
            SecondaryVariants[x as keyof typeof SecondaryVariants];
          const secondaryBtnAction =
            actions.secondary?.[x as keyof typeof actions.secondary];

          if (secondaryBtnAction)
            return (
              <Box
                className='secondary-btn'
                key={x}
                onClick={secondaryBtnAction?.action}
              >
                {secondaryBtnAction?.link && (
                  <Link
                    href={secondaryBtnAction?.link}
                    target={secondaryBtnAction?.target || '_self'}
                  />
                )}
                {primaryVariant?.icon}
                {t(primaryVariant?.label)}
              </Box>
            );
        })}
      </Popover>
    </Box>
  );
};

export default TableActions;
