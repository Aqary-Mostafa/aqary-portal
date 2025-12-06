import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import { RootState } from '../store';

import { SITE_CONFIG } from '../constants';
import { getUserData } from '../api/user';

const LogoImage = ({ shortIcon }: { shortIcon?: boolean }) => {
  const { lang } = useParams() as { lang: string };
  const { theme: mode } = useSelector((state: RootState) => state.user);
  const { data: userData } = useSWR(
    'getUserData',
    async () => await getUserData(),
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
    },
  );

  if (shortIcon)
    return (
      <Image
        src={SITE_CONFIG?.letter_logo}
        alt='Aqary logo'
        priority={true}
        fill
      />
    );

  return (
    <Image
      src={
        userData?.data?.active_company?.logo ||
        (mode === 'dark'
          ? lang === 'ar'
            ? SITE_CONFIG.logo_white_ar
            : SITE_CONFIG.logo_white
          : lang === 'ar'
            ? SITE_CONFIG.logo_ar
            : SITE_CONFIG.logo)
      }
      alt='Aqary logo'
      priority={true}
      fill
    />
  );
};

export default LogoImage;
