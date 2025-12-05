import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../store";
import {
  CrmHeaderSlice,
  setBreadCrumbs,
  setPageHeader,
} from "../../store/slices/crmHeaderSlice";

export const useCrmPageHeader = ({
  breadcrumbs,
  pageHeader,
}: CrmHeaderSlice) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setBreadCrumbs(breadcrumbs));
    dispatch(setPageHeader(pageHeader));

    return () => {
      dispatch(setBreadCrumbs([]));
      dispatch(setPageHeader(undefined));
    };
  }, [dispatch, breadcrumbs, pageHeader]);
};
