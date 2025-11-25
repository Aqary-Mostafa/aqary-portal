import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  GridLegacy,
  TextField,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import useSWR from "swr";

import { CreateLicenceContainerProps } from "..";

import { consts } from "@/api/consts";
import { locations } from "@/api/location";
import { CreateLicenseSchemaFormValues } from "@/modules/legal/validator/license";

interface CreateTaxProps {
  formGet: CreateLicenceContainerProps["formGet"];
  isEdit?: boolean;
}

const CreateLicense = ({ formGet, isEdit }: CreateTaxProps) => {
  const { control, watch, resetField } =
    useFormContext<CreateLicenseSchemaFormValues>();

  const country = watch("country");
  const general_license = watch("general_license");

  const { data: statesData, isLoading: loadingStates } = useSWR(
    country?.id ? ["getStatesByCountry", country?.id] : null,
    () => locations.getStatesByCountry({ id: country?.id?.toString() }),
    { revalidateOnFocus: false }
  );

  const company_industry = watch("company_industry");

  const { data: companyTypes, isLoading: companyTypesLoading } = useSWR(
    company_industry ? `industry-${company_industry?.id}` : null,
    () =>
      consts.getCompanyTypesConst({
        id: company_industry?.id?.toString() as string,
      }),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  return (
    <GridLegacy container spacing={3}>
      {/* license Name */}
      <GridLegacy item lg={4} md={6} xs={12}>
        <Controller
          name="license_name"
          control={control}
          defaultValue={watch("license_name") || ""}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel required>license Name</FormLabel>
              <TextField
                {...field}
                placeholder="Enter license Name"
                error={!!error}
              />
              <FormHelperText>
                {error?.message || "Please enter license Name"}
              </FormHelperText>
            </FormControl>
          )}
          disabled={!!isEdit}
        />
      </GridLegacy>

      {/* license Name ar */}
      <GridLegacy item lg={4} md={6} xs={12}>
        <Controller
          name="license_name_ar"
          control={control}
          defaultValue={watch("license_name_ar") || ""}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>license Name Ar</FormLabel>
              <TextField
                {...field}
                placeholder="Enter license Name ar"
                error={!!error}
              />
              <FormHelperText>
                {error?.message || "Please enter license Name ar"}
              </FormHelperText>
            </FormControl>
          )}
          disabled={!!isEdit}
        />
      </GridLegacy>

      {/* Country */}
      <GridLegacy item lg={4} md={6} xs={12}>
        <Controller
          name="country"
          control={control}
          defaultValue={watch("country") || null}
          render={({
            field: { onChange, value, ...rest },
            fieldState: { error },
          }) => (
            <FormControl error={!!error}>
              <FormLabel>Country</FormLabel>
              <Autocomplete
                {...rest}
                onChange={(_, item) => {
                  onChange(item);
                }}
                value={value}
                options={formGet?.getAllCountries || []}
                getOptionLabel={(item) => item?.label as string}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                  <TextField
                    placeholder="Select Country"
                    {...params}
                    error={!!error}
                  />
                )}
              />
              <FormHelperText>
                {error?.message || "Please select country"}
              </FormHelperText>
            </FormControl>
          )}
          disabled={!!isEdit}
        />
      </GridLegacy>

      {/* State */}
      <GridLegacy item lg={4} md={6} xs={12}>
        <Controller
          name="state"
          control={control}
          defaultValue={watch("state") || null}
          render={({
            field: { onChange, value, ...rest },
            fieldState: { error },
          }) => (
            <FormControl error={!!error}>
              <FormLabel>State</FormLabel>
              <Autocomplete
                {...rest}
                onChange={(_, item) => {
                  onChange(item);
                }}
                value={value}
                loading={loadingStates}
                options={statesData?.data || []}
                getOptionLabel={(item) => item?.label as string}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                  <TextField
                    placeholder="Select State"
                    {...params}
                    error={!!error}
                  />
                )}
              />
              <FormHelperText>
                {error?.message || "Please select State"}
              </FormHelperText>
            </FormControl>
          )}
          disabled={!!isEdit || !country || !!general_license}
        />
      </GridLegacy>

      <GridLegacy item lg={4} md={6} xs={12}>
        <Controller
          name="general_license"
          control={control}
          defaultValue={watch("general_license") || false}
          render={({ field }) => (
            <FormControlLabel
              sx={{ height: "100%" }}
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.checked);
                    if (e.target.checked) resetField("state");
                  }}
                />
              }
              label="General  License"
            />
          )}
        />
      </GridLegacy>

      {/* Company Industry */}
      <GridLegacy item lg={4} md={6} xs={12}>
        <Controller
          name="company_industry"
          control={control}
          defaultValue={watch("company_industry") || null}
          render={({
            field: { onChange, value, ...rest },
            fieldState: { error },
          }) => (
            <FormControl error={!!error} data-testid="company_industry">
              <FormLabel>Company Industry</FormLabel>
              <Autocomplete
                {...rest}
                onChange={(_, item) => {
                  onChange(item);
                  resetField("company_types");
                }}
                value={value}
                options={formGet?.companyIndustries || []}
                getOptionLabel={(item) => item.label}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Please Select Company Industry"
                    error={!!error}
                  />
                )}
              />
              <FormHelperText>
                {error?.message ?? "Please Select Company Industry"}
              </FormHelperText>
            </FormControl>
          )}
          disabled={!!isEdit}
        />
      </GridLegacy>

      {/* Company Type */}
      <GridLegacy item lg={4} md={6} xs={12}>
        <Controller
          name="company_types"
          control={control}
          defaultValue={watch("company_types") || null}
          render={({
            field: { onChange, value, ...rest },
            fieldState: { error },
          }) => (
            <FormControl error={!!error} data-testid="company-type">
              <FormLabel>Company Type</FormLabel>
              <Autocomplete
                {...rest}
                onChange={(_, item) => {
                  onChange(item);
                }}
                value={value}
                options={companyTypes?.data || []}
                loading={companyTypesLoading}
                disabled={!company_industry || !!isEdit}
                getOptionLabel={(item) => item.label}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Please Select Company Type"
                    error={!!error}
                  />
                )}
              />
              <FormHelperText>
                {error?.message ?? "Please Select Company Type"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </GridLegacy>

      <GridLegacy item xs={12} />

      {/* info message */}
      <GridLegacy item md={6} xs={12}>
        <Controller
          name="info_message"
          control={control}
          defaultValue={watch("info_message") || ""}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Description</FormLabel>
              <TextField
                {...field}
                multiline
                rows={8}
                placeholder="Enter description"
                error={!!error}
              />
              <FormHelperText>
                {error?.message || "Please enter description"}
              </FormHelperText>
            </FormControl>
          )}
          disabled={!!isEdit}
        />
      </GridLegacy>

      <GridLegacy item lg={3} md={6} xs={12}>
        <Controller
          name="mandatory_license"
          control={control}
          defaultValue={watch("mandatory_license") || false}
          render={({ field }) => (
            <FormControlLabel
              sx={{ height: "100%" }}
              control={<Checkbox {...field} checked={field.value} />}
              label="Mandatory License"
            />
          )}
        />
      </GridLegacy>
    </GridLegacy>
  );
};

export default CreateLicense;
