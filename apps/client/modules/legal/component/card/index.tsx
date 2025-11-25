import {
  Alert,
  Box,
  Chip,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { LicenceCardContainer } from "./styled";
import CellWithCopy from "@/components/CellWithCopy";
import TableActions from "@/components/TableActions";
import { TableActionsPrimary } from "@/types/shared";
import { LicensesTypes } from "@/types/legal";

const LicenceCard = ({ data }: { data: LicensesTypes }) => {
  return (
    <LicenceCardContainer>
      <Box className="details">
        <Grid container spacing={3}>
          <Grid size={{ xs: 10 }}>
            <Box className="header">
              <Box className="header__title">
                <Typography className="name">{data?.license_name}</Typography>
                <Chip
                  label="Verified"
                  color="success"
                  className="header__chip"
                />
              </Box>
              <CellWithCopy url="License #REL-2024-001" />
            </Box>
          </Grid>
          <Grid size={{ xs: 2 }} justifyItems="self-end">
            <TableActions
              actions={{
                primary: {
                  [TableActionsPrimary.view]: {
                    sxColor: "#1A1A1A",
                  },
                  [TableActionsPrimary.download]: {
                    sxColor: "#1A1A1A",
                  },
                  [TableActionsPrimary.edit]: {
                    sxColor: "#1A1A1A",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box className="date">
              <Box className="date__label">Issue Date:</Box>
              <Box className="date__value">22/12/2025</Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box className="date">
              <Box className="date__label">Expiry Date:</Box>
              <Box className="date__value">22/12/2026</Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box className="date">
              <Box className="date__label">Verified By:</Box>
              <Box className="date__value">Fwagiii@aqary.com</Box>
            </Box>
          </Grid>
        </Grid>
        <Box className="progress">
          <Box className="progress__label">
            <Typography>License Period:</Typography>
            <Typography>45 days remaining</Typography>
          </Box>
          <LinearProgress variant="determinate" value={80} color="success" />
        </Box>
      </Box>
      <Alert severity="info">Renewal reminder sent on November 19, 2025</Alert>
    </LicenceCardContainer>
  );
};

export default LicenceCard;
