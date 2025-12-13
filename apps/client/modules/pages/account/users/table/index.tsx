import { useState } from 'react';
import UsersTableView from './view';
import UsersTableEdit from './edit';

const UsersTable = () => {
  const [current, setCurrent] = useState('view');
  const isEdit = current === 'edit';
  const isView = current === 'view';

  if (isView) return <UsersTableView setCurrent={setCurrent} />;
  if (isEdit) return <UsersTableEdit setCurrent={setCurrent} />;
};

export default UsersTable;
