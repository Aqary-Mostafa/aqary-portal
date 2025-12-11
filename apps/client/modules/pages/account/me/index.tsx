'use client';
import PageHeader from '@repo/ui/page-header';
import UserInformation from './user-information';
import UserProfile from './user-profile';
import UserPassword from './user-password';

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
      <UserProfile />
      <UserPassword />
    </>
  );
};

export default AccountModule;
