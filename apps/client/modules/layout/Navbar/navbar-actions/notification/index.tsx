import { Badge, IconButton, Popover } from "@mui/material";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";

import NotificationContent from "./notification-content";

import { RootState } from "@/store";

export interface NotificationType {
  label?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success";
  image_name?: string;
  mail?: string;
}

export interface NotificationItem {
  id: number;
  name: string;
  time: number;
  description: string;
  image: string;
  isRead: boolean;
  type: NotificationType[];
}

const Notification = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const [isNewMessage] = useState(false);
  // const [notificationData] = React.useState<NotifyData[]>([]);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const { isNew } = useSelector((state: RootState) => state.notification);

  return (
    <>
      <IconButton
        className={`action-btn v2`}
        onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}
      >
        {/* <Badge badgeContent={notificationData?.length} color='primary'> */}
        <Badge variant="dot" invisible={!isNew} color="primary">
          <IoIosNotificationsOutline />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        className="navbar-popper notifications"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <NotificationContent />
      </Popover>
    </>
  );
};

export default Notification;
