'use client';
import PageHeader from '@repo/ui/page-header';
import UsersCounts from './counts';
import UsersTable from './table';

const AccountUsersModule = () => {
  return (
    <>
      <PageHeader
        pageHeader='Accounts'
        breadcrumbs={[
          { label: 'Pages', link: '#' },
          { label: 'Accounts', link: '#' },
        ]}
      />

      <UsersCounts />
      <UsersTable />
    </>
  );
};

export default AccountUsersModule;
