import { Box, GridLegacy, IconButton, Popover } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { TbAccessPoint } from 'react-icons/tb';

const Links = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}
        className='action-btn'
      >
        <TbAccessPoint />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        className='navbar-popper'
      >
        <GridLegacy container className='container'>
          <GridLegacy item lg={3.5} md={6} sm={12}>
            <Box className='product-image'>
              <Image
                src='/svg/product-placeholder.svg'
                alt='access image'
                fill
                sizes='300px'
              />
            </Box>
          </GridLegacy>
          {links.map((item, idx) => (
            <GridLegacy
              container
              key={idx}
              item
              lg={2.5}
              md={6}
              sm={12}
              className='link-group'
            >
              <GridLegacy item sm={12} className='header'>
                {item.title}
              </GridLegacy>
              <GridLegacy container className='links-group'>
                {item.link.map((link, idx) => (
                  <GridLegacy item sm={12} key={idx} className='link'>
                    <GoDotFill />
                    <Link href={link.link}> {link.label} </Link>
                  </GridLegacy>
                ))}
              </GridLegacy>
            </GridLegacy>
          ))}
        </GridLegacy>
      </Popover>
    </>
  );
};

export default Links;

const links = [
  {
    title: 'User Quick',
    link: [
      {
        label: 'Social Profile',
        link: '#',
      },
      {
        label: 'Account Profile',
        link: '#',
      },
      {
        label: 'User Cards',
        link: '#',
      },
      {
        label: 'User Lists',
        link: '#',
      },
      {
        label: 'Contact',
        link: '#',
      },
    ],
  },
  {
    title: 'Application',
    link: [
      {
        label: 'Chat',
        link: '#',
      },
      {
        label: 'Kanban',
        link: '#',
      },
      {
        label: 'Mail',
        link: '#',
      },
      {
        label: 'Calender',
        link: '#',
      },
      {
        label: 'E-Commerce',
        link: '#',
      },
    ],
  },
  {
    title: 'Primitive',
    link: [
      {
        label: 'Colors',
        link: '#',
      },
      {
        label: 'Typography',
        link: '#',
      },
      {
        label: 'Shadow',
        link: '#',
      },
      {
        label: 'Icons',
        link: '#',
      },
      {
        label: 'Elements',
        link: '#',
      },
    ],
  },
];
