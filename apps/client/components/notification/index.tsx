"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { verifySession } from "@/utils/dal";

import { AlertBar, AlertBarProps } from "../AlertBar";

import { RootState } from "@/store";
import {
  setCount,
  setIsNew,
  setNoticications,
} from "@/store/slices/notification";

import { getNotifications } from "@/api/notifications";
import { consoleLog } from "@/utils/console-log";

const Notifications = () => {
  const [alertBarProps, setAlertBarProps] = useState<AlertBarProps>({
    message: "",
    severity: "info",
  });
  const eventSourceRef = useRef<EventSource | null>(null);
  const { closeConnection } = useSelector(
    (state: RootState) => state.notification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (closeConnection) return;

    verifySession?.().then((session) => {
      const see = new EventSource(
        `${
          // process.env.NEXT_PUBLIC_API_URL
          process.env.NEXT_PUBLIC_NOTIFIY_API_URL
        }/notifications/push?channel=dashboard&auth_token=Bearer ${
          session?.aqaryUser?.token
        }`
      );

      see.onmessage = (event) => {
        dispatch(setIsNew(true));
        getNotifications().then((res) => {
          dispatch(setNoticications(res?.data));
          dispatch(setCount(res?.Total || 0));
        });

        setAlertBarProps({
          message: event.data,
        });
      };

      see.onerror = (err) => {
        consoleLog("SSE error:", err);
        see.close();
      };

      eventSourceRef.current = see;

      return () => {
        see.close();
      };
    });
  }, [closeConnection, dispatch]);

  useEffect(() => {
    if (closeConnection) eventSourceRef?.current?.close();
  }, [closeConnection]);

  return (
    <>
      <AlertBar
        onClose={() => setAlertBarProps({ message: "" })}
        {...alertBarProps}
      />
    </>
  );
};

export default Notifications;
