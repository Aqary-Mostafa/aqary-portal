import { Metadata } from 'next';
import * as React from 'react';

import { SITE_CONFIG } from '@/constants';
import DashboardLayouts from '@/components/dashboard-layouts';

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
