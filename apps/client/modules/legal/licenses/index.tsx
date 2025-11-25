"use client";
import { Box, Button, LinearProgress } from "@mui/material";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { type JSX, useMemo, useState } from "react";

import useConfirmationDialog from "@/hooks/useConfirmDialog";

import { useCrmPageHeader } from "@/components/CrmPageHeader/helper";
import { SectionLayout } from "@/components/SectionLayout/SectionLayout";

import TableActions from "@/components/TableActions";
import ViewLicense from "./view";

import { deleteLicense } from "../api/legal";
import { getDefaultDeleteDialog } from "@/utils/get-default-dialog";
import { useDefaultMRTOptions } from "@/utils/use-default-MRT-options";

import { TableActionsPrimary } from "@/types/shared";
import { LicensesTypes } from "@/types/legal";
import { AlertBar, AlertBarProps } from "@/components/AlertBar";
import LicenceCard from "../component/card";

interface AmenitiesTypes {
  _page: string;
  _pageSize: string;
  data: LicensesTypes[];
  total: number;
}

/**
 *
 * @component
 * @param {_token} props._token - User token.
 * @param {_page} props._page - Current table page.
 * @param {_pageSize} props._pageSize - Controle row length in table.
 * @param {data} props.data - All Individual Contact data.
 * @returns {JSX.Element} The rendered Individual Contact page.
 *
 */
const LagelLicensesContainer = ({
  _page,
  _pageSize,
  total,
  data,
}: AmenitiesTypes): JSX.Element => {
  const [alertBarProps, setAlertBarProps] = useState<AlertBarProps>({
    message: "",
    severity: "info",
  });
  const dialog = useConfirmationDialog();
  const router = useRouter();

  const handleDelete = (id: number) => {
    deleteLicense({ id: id?.toString() }).then((res) => {
      if (res?.Message === "success") {
        setAlertBarProps({
          message: `Deleted successfully`,
          severity: "success",
        });
        router.refresh();
      } else
        setAlertBarProps({
          message: `Failed to Delete`,
          severity: "error",
        });
    });
  };

  useCrmPageHeader({
    breadcrumbs: [
      {
        label: "Legal Settings",
        link: "/dashboard/settings/legal/",
      },
      {
        label: "Company License",
        link: "#",
      },
    ],
    pageHeader: "Company License",
  });

  return (
    <>
      {data?.map((x, idx) => (
        <LicenceCard data={x} key={idx} />
      ))}

      {/* Ready to render dialog */}
      {dialog.renderConfirmationDialog()}
      {/* Ready to render Alertbar */}
      <AlertBar
        onClose={() => setAlertBarProps({ message: "" })}
        {...alertBarProps}
      />
    </>
  );
};

export default LagelLicensesContainer;
