import { MdOutlineInsights } from 'react-icons/md';
import { TbGitBranch } from 'react-icons/tb';

const mainMenu = {
  head: {
    id: 1,
    label: 'Main Menu',
    icon: <TbGitBranch />,
    url: '/crm/lead_contact',
  },
  list: [
    {
      id: 2,
      label: 'Listing Insights',
      icon: <MdOutlineInsights />,
      url: '/dashboard/insights/listing',
    },
  ],
};

export const INITIAL_LIST = [
  {
    id: 1,
    data: mainMenu,
  },
];
