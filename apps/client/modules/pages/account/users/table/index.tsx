import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { TitleActionsEnums } from '@/components/SectionLayout/TitleActions';
import { useState } from 'react';
import UsersTableView from './view';
import UsersTableEdit from './edit';

const UsersTable = () => {
  const [current, setCurrent] = useState('view');
  const isEdit = current === 'edit';
  const isView = current === 'view';

  return (
    <SectionLayout
      header={{
        title: 'Company Users',
        actions: [
          {
            type: TitleActionsEnums.primary,
            action: () => setCurrent('edit'),
            props: {
              children: 'Create User',
            },
          },
        ],
      }}
    >
      {isView && <UsersTableView />}
      {isEdit && <UsersTableEdit setCurrent={setCurrent} />}
    </SectionLayout>
  );
};

export default UsersTable;
