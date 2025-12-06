import { MRT_Row } from 'material-react-table';
import React, { useEffect, useState } from 'react';

import ViewDialog, { ViewSections } from '@/components/ViewDialog';

import { getLicense } from '../../api/legal';

import { LicensesTypes } from '@/types/legal';

const ViewLicense = ({ row }: { row: MRT_Row<LicensesTypes> }) => {
  const rowData = row?.original;
  const [data, setData] = useState<ViewSections | undefined>();

  useEffect(() => {
    getLicense({ id: rowData?.id?.toString() })
      .then((res) => {
        const data = res?.data;

        return setData({
          details: {
            label: 'View',
            data: [
              {
                label: 'license Name',
                value: data?.license_name,
              },
              {
                label: 'license Name AR',
                value: data?.license_name_ar,
              },
              {
                label: 'Country',
                value: data?.country_id?.label,
              },
              {
                label: 'State',
                value: data?.state_id?.label,
              },
              {
                label: 'company industry',
                value: data?.company_industry_id?.label,
              },
              {
                label: 'company type',
                value: data?.company_type_id?.label,
              },
              {
                label: 'info message',
                value: 'ask backend',
              },
              {
                label: 'Mandatory License',
                value: `${data?.is_active}`,
              },
              {
                label: 'General License',
                value: `${data?.is_general}`,
              },
            ],
          },
        });
      })
      .catch(() => setData(undefined));
  }, [rowData?.id]);

  return <ViewDialog data={data} />;
};

export default ViewLicense;
