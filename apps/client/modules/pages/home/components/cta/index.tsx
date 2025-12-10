import { LuArrowRightToLine } from 'react-icons/lu';
import CtaCard from '../cta-card';
import { CtaContainer } from './styled';

const HomeCta = () => {
  return (
    <CtaContainer>
      {CTADATA?.map((x, idx) => (
        <CtaCard key={idx} card={x} />
      ))}
    </CtaContainer>
  );
};

export default HomeCta;

const CTADATA = [
  {
    link: '/auth/login',
    label: 'Sign In',
    description:
      'Already have an account? Sign in to access your dashboard and continue managing your properties.',
    btnLabel: 'Login',
    actionIcon: <LuArrowRightToLine width={24} height={24} />,
    bgImage: '/signin.png',
  },
];
