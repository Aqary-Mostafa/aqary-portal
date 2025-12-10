'use client';
import { GridLegacy } from '@mui/material';

import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import TabLink from '@/components/TabLink';
import PageHeader from '@repo/ui/page-header';

const LegalSettingContainer = () => {
  return (
    <>
      {/* The page header */}
      <PageHeader
        pageHeader='Accounts'
        breadcrumbs={[
          { label: 'Pages', link: '#' },
          { label: 'Accounts', link: '#' },
        ]}
      />

      {/* Table section */}
      <SectionLayout>
        <GridLegacy container spacing={3}>
          <GridLegacy item xs={12} sm={6} md={4}>
            <TabLink href='legal/licenses' label='Licenses' />
          </GridLegacy>
          <GridLegacy item xs={12} sm={6} md={4}>
            <TabLink href='legal/certificate' label='Certificate' />
          </GridLegacy>
          <GridLegacy item xs={12} sm={6} md={4}>
            <TabLink href='legal/legal_condition ' label='Legal condition ' />
          </GridLegacy>
        </GridLegacy>
      </SectionLayout>
    </>
  );
};

export default LegalSettingContainer;
