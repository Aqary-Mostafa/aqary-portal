'use client';

import React, { type JSX, useState } from 'react';

import useConfirmationDialog from '@/hooks/useConfirmDialog';

import { LicensesTypes } from '@/types/legal';
import { AlertBar, AlertBarProps } from '@/components/AlertBar';
import LicenceCard from '../component/card';
import PageHeader from '@repo/ui/page-header';

interface AmenitiesTypes {
  _page: string;
  _pageSize: string;
  data: LicensesTypes[];
  total: number;
}

/**
 *
 * @component
 * @param {_token} props._token - User token.
 * @param {_page} props._page - Current table page.
 * @param {_pageSize} props._pageSize - Controle row length in table.
 * @param {data} props.data - All Individual Contact data.
 * @returns {JSX.Element} The rendered Individual Contact page.
 *
 */
const LagelLicensesContainer = ({ data }: AmenitiesTypes): JSX.Element => {
  const [alertBarProps, setAlertBarProps] = useState<AlertBarProps>({
    message: '',
    severity: 'info',
  });
  const dialog = useConfirmationDialog();

  return (
    <>
      <PageHeader
        pageHeader='Accounts'
        breadcrumbs={[
          { label: 'Pages', link: '#' },
          { label: 'Accounts', link: '#' },
        ]}
      />

      {data?.map((x, idx) => (
        <LicenceCard data={x} key={idx} />
      ))}

      {/* Ready to render dialog */}
      {dialog.renderConfirmationDialog()}
      {/* Ready to render Alertbar */}
      <AlertBar
        onClose={() => setAlertBarProps({ message: '' })}
        {...alertBarProps}
      />
    </>
  );
};

export default LagelLicensesContainer;
