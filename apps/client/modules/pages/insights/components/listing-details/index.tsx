'use client';

import Image from 'next/image';
import { Typography, Box, Divider } from '@mui/material';
import { SlLocationPin } from 'react-icons/sl';

import {
  CardRoot,
  ImageWrapper,
  Badge,
  Content,
  TitleRow,
  Price,
  MetaRow,
  IconText,
} from './styled';
import { MdVerified } from 'react-icons/md';
import { formatCurrency } from '@/utils/formatCurrency';
import CellWithCopy from '@/components/CellWithCopy';
import { IoBedOutline } from 'react-icons/io5';
import { BiArea, BiBath } from 'react-icons/bi';

type ListingDetailsProps = {
  data: {
    imageUrl: string;
    title: string;
    verified?: boolean;
    price: number;
    refNumber: string;
    location: string;
    beds: number;
    baths: number;
    area: number;
  };
};

const ListingDetails = ({ data }: ListingDetailsProps) => {
  const {
    imageUrl,
    title,
    verified = false,
    price,
    refNumber,
    location,
    beds,
    baths,
    area,
  } = data;

  return (
    <CardRoot>
      {imageUrl && (
        <ImageWrapper>
          <Badge>Sale</Badge>
          <Image src={imageUrl} alt={title} fill />
        </ImageWrapper>
      )}

      <Content>
        <TitleRow>
          <Typography>{title}</Typography>
          {verified && (
            <Box className='verified-badge'>
              <MdVerified
                fontSize={12}
                color='var(--mui-palette-primary-main)'
              />
              Verified
            </Box>
          )}
        </TitleRow>

        <Price label={formatCurrency(price)} />

        <MetaRow>
          Ref No.
          <CellWithCopy url={refNumber} />
        </MetaRow>

        <MetaRow>
          <SlLocationPin />
          <Typography>{location}</Typography>
        </MetaRow>

        <MetaRow className='facts'>
          <IconText>
            <IoBedOutline />
            {beds}
          </IconText>
          <Divider orientation='vertical' flexItem />
          <IconText>
            <BiBath />
            {baths}
          </IconText>
          <Divider orientation='vertical' flexItem />
          <IconText>
            <BiArea />
            {area} Sqft
          </IconText>
        </MetaRow>
      </Content>
    </CardRoot>
  );
};

export default ListingDetails;
