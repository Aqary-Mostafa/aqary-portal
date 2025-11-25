"use client";
import { GridLegacy } from "@mui/material";

import { useCrmPageHeader } from "@/components/CrmPageHeader/helper";
import { SectionLayout } from "@/components/SectionLayout/SectionLayout";
import TabLink from "@/components/TabLink";

const LegalSettingContainer = () => {
  useCrmPageHeader({
    breadcrumbs: [
      {
        label: "Legal setting",
        link: "/dashboard/settings/legal/",
      },
    ],
    pageHeader: "Legal setting",
  });

  return (
    <>
      {/* The page header */}
      {/* <PageHeader
        header='Legal setting'
        links={[
          {
            lable: 'Legal setting',
            link: `#`,
          },
        ]}
      /> */}

      {/* Table section */}
      <SectionLayout>
        <GridLegacy container spacing={3}>
          <GridLegacy item xs={12} sm={6} md={4}>
            <TabLink href="legal/licenses" label="Licenses" />
          </GridLegacy>
          <GridLegacy item xs={12} sm={6} md={4}>
            <TabLink href="legal/certificate" label="Certificate" />
          </GridLegacy>
          <GridLegacy item xs={12} sm={6} md={4}>
            <TabLink href="legal/legal_condition " label="Legal condition " />
          </GridLegacy>
        </GridLegacy>
      </SectionLayout>
    </>
  );
};

export default LegalSettingContainer;
