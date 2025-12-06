import { GoReport } from 'react-icons/go';
import { TbGitBranch } from 'react-icons/tb';

const mainMenu = {
  head: {
    id: 0,
    label: 'Main Menu',
    icon: <TbGitBranch />,
    url: '/crm/lead_contact',
  },
  list: [
    {
      id: 0,
      label: 'Reports',
      icon: <GoReport />,
      url: '/crm/leads/reports',
    },
  ],
};

export const INITIAL_LIST = [
  {
    id: 0,
    data: mainMenu,
  },
];
