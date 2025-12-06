import { Metadata } from 'next';
import * as React from 'react';
// import DashboardLayouts from "@repo/ui/dashboard-layouts";
import DashboardLayouts from '@repo/ui/dashboard-layouts';

import Layout from '@/modules/layout';
import { SITE_CONFIG } from '@/constants';

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
};

export default function MainDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayouts>{children}</DashboardLayouts>;
}
