import { Box, Button, IconButton, Typography } from '@mui/material';
import { CtaCardContainer } from './styled';
import Image from 'next/image';
import { JSX } from 'react';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';

export interface CtaCardTypes {
  link: string;
  label: string;
  description: string;
  btnLabel: string;
  actionIcon: JSX.Element;
  bgImage: string;
}

export interface CtaCardProps {
  card: CtaCardTypes;
}

const CtaCard = ({ card }: CtaCardProps) => {
  return (
    <CtaCardContainer>
      <Box className='background'>
        <Image src={card?.bgImage} alt={card?.label} fill />
      </Box>
      <Link href={card?.link}>
        <IconButton className='action'>{card?.actionIcon}</IconButton>
      </Link>
      <Box className='content'>
        <Typography className='content__head'>{card?.label}</Typography>
        <Typography className='content__deacription'>
          {card?.description}
        </Typography>
        <Link href={card?.link}>
          <Button fullWidth variant='contained' color='primary'>
            {card?.btnLabel} <MdArrowForward />
          </Button>
        </Link>
      </Box>
    </CtaCardContainer>
  );
};

export default CtaCard;
