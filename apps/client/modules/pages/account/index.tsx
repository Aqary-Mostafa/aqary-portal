'use client';
import PageHeader from '@repo/ui/page-header';
import UserInformation from './user-information';

const AccountModule = () => {
  return (
    <>
      <PageHeader
        pageHeader='Accounts'
        breadcrumbs={[
          { label: 'Pages', link: '#' },
          { label: 'Accounts', link: '#' },
        ]}
      />

      <UserInformation />
    </>
  );
};

export default AccountModule;
