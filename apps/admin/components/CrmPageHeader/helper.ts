import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@/store";
import {
  CrmHeaderSlice,
  setBreadCrumbs,
  setPageHeader,
} from "@/store/slices/crmHeaderSlice";

import { V2_DEMO } from "@/constants";

export const useCrmPageHeader = ({
  breadcrumbs,
  pageHeader,
}: CrmHeaderSlice) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!V2_DEMO()) return;

    dispatch(setBreadCrumbs(breadcrumbs));
    dispatch(setPageHeader(pageHeader));

    return () => {
      dispatch(setBreadCrumbs([]));
      dispatch(setPageHeader(undefined));
    };
  }, [dispatch, breadcrumbs, pageHeader]);
};
