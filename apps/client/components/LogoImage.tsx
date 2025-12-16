import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import { SITE_CONFIG } from '@/constants';

const LogoImage = ({ shortIcon }: { shortIcon?: boolean }) => {
  const { lang } = useParams() as { lang: string };
  const { theme: mode } = useSelector((state: RootState) => state.user);

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
        mode === 'dark'
          ? lang === 'ar'
            ? SITE_CONFIG.logo_white_ar
            : SITE_CONFIG.logo_white
          : lang === 'ar'
            ? SITE_CONFIG.logo_ar
            : SITE_CONFIG.logo
      }
      alt='Aqary logo'
      priority={true}
      fill
    />
  );
};

export default LogoImage;
