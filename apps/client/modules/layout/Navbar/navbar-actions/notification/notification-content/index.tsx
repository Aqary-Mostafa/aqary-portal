import { Avatar, Badge, Box, Button, Drawer, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';

import { RootState } from '@/store';
import {
  setCount,
  setIsNew,
  setNoticications,
} from '@/store/slices/notification';

import { getNotifications } from '@/api/notifications';

export type NotificationContentProps = {
  isFullView?: boolean;
};

const NotificationContent = ({ isFullView }: NotificationContentProps) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const dispatch = useDispatch();
  const { notficationsCount } = useSelector(
    (state: RootState) => state.notification,
  );

  const limit = isFullView ? 100 : 10;

  React.useEffect(() => {
    dispatch(setNoticications(undefined));
  }, [isFullView, dispatch]);

  const { data: notificationData } = useSWR(
    `getNotifications/${limit}`,
    () => getNotifications(1, limit),
    {
      onSuccess: (res) => {
        dispatch(setNoticications(res?.data));
        dispatch(setCount(res?.Total || 0));
      },
    },
  );

  useEffect(() => {
    dispatch(setIsNew(false));
  }, [dispatch]);

  const formatRelativeTime = (timestamp: string) => {
    const diffInMinutes = dayjs().diff(dayjs(timestamp), 'minute');
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
    const diffInMonths = diffInDays / 30;
    const diffInYears = diffInDays / 365;

    if (diffInMinutes < 60) {
      return `${diffInMinutes} min ago`;
    } else if (diffInHours < 24) {
      const hours = Math.floor(diffInHours);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diffInDays < 30) {
      const days = Math.floor(diffInDays);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (diffInDays < 365) {
      const months = Math.floor(diffInMonths);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(diffInYears);
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor='right'
        className='notifications-fullview'
      >
        <NotificationContent isFullView />
      </Drawer>

      <Box
        className='notifications-container'
        sx={{
          maxHeight: isFullView ? '100%' : '500px',
        }}
      >
        <Box className='heading'>
          <Box className='title'>
            <Typography>All Notifications</Typography>
            {notificationData && (
              <Badge badgeContent={notficationsCount} color='error' />
            )}
          </Box>
          {/* <Tooltip title='Mark all as read'>
            <IconButton>
              <MdMarkEmailRead color='#6290cb' />
            </IconButton>
          </Tooltip> */}
        </Box>

        {/* <Autocomplete
          options={[
            'All Notification',
            'New',
            'Unread',
            'Confirmation',
            'File',
            'Mail',
          ]}
          defaultValue={null}
          renderInput={(params) => (
            <TextField {...params} placeholder='All Notification' />
          )}
          className='filter'
        /> */}

        <Box className='container'>
          {notificationData ? (
            notificationData?.data?.map((notify) => (
              <Box className='notification' key={notify?.title}>
                <Box className='notification__content'>
                  <Avatar className='user-image' src={notify?.sender?.image} />
                  <Box className='user-data'>
                    <Box className='user-data__header'>
                      <Typography>{notify?.sender?.name}</Typography>
                      <Typography>
                        {formatRelativeTime(notify?.read_at)}
                      </Typography>
                    </Box>
                    <Typography>{notify?.message}</Typography>
                  </Box>
                </Box>

                {/* <IconButton className='notification__clear'>
                  <IoMdClose color='#6290cb' />
                </IconButton> */}
              </Box>
            ))
          ) : (
            <Box
              sx={{
                padding: '16px',
                fontSize: '16px',
              }}
            >
              No Notfications!
            </Box>
          )}
        </Box>

        {!isFullView && (
          <Button fullWidth onClick={() => setOpenDrawer(true)}>
            View All
          </Button>
        )}
      </Box>
    </>
  );
};

export default NotificationContent;
