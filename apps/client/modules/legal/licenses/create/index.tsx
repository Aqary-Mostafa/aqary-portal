'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import FormActions from '@/components/FormActions';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import SectionsAccordion from '@/components/SectionsAccordion';
import { AlertBar, AlertBarProps } from '@/components/AlertBar';
import CreateLicense from './create-license';
import { createLicenceHandler } from './create-license/handlers';

import { consoleLog } from '@/utils/console-log';

import { CountryType } from '@/types/places';
import { ConstantsTypes } from '@/types/shared';
import {
  CreateLicenseSchema,
  CreateLicenseSchemaFormValues,
} from '../../validator/license';
import PageHeader from '@repo/ui/page-header';

export interface CreateLicenceContainerProps {
  formGet: {
    getAllCountries?: CountryType[];
    companyIndustries?: ConstantsTypes[];
    licenceData?: CreateLicenseSchemaFormValues;
  };
}

const CreateLicenseContainer = ({ formGet }: CreateLicenceContainerProps) => {
  const [alertBarProps, setAlertBarProps] = useState<AlertBarProps>({
    message: '',
    severity: 'info',
  });
  const router = useRouter();
  const { entityId } = useParams() as { entityId: string };
  const isEdit = formGet?.licenceData;
  const form = useForm<CreateLicenseSchemaFormValues>({
    resolver: zodResolver(CreateLicenseSchema),
    mode: 'all',
    defaultValues: {
      ...(isEdit ?? {}),
    },
  });

  const onSubmit: SubmitHandler<CreateLicenseSchemaFormValues> = (data) => {
    createLicenceHandler({
      data,
      dirty: form?.formState
        ?.dirtyFields as unknown as CreateLicenseSchemaFormValues,
      cb: (res) => {
        if (res?.Message === 'success') {
          setAlertBarProps({
            message: isEdit ? 'Updated successfully' : 'Created successfully',
            severity: 'success',
          });

          router.push('/dashboard/settings/legal/licenses');
        } else
          setAlertBarProps({
            message:
              res?.error ?? (isEdit ? 'Failed to update' : 'Failed to create'),
            severity: 'error',
          });
      },
      entityId,
    });
  };

  const onError = (err: unknown) => {
    consoleLog('Missing fields ===== ', err);

    setAlertBarProps({
      message: 'Missing fields',
      severity: 'warning',
    });
  };

  return (
    <>
      {/* The page header */}
      <PageHeader
        pageHeader='Accounts'
        breadcrumbs={[
          { label: 'Pages', link: '#' },
          { label: 'Accounts', link: '#' },
        ]}
      />

      <FormProvider {...form}>
        <form
          className='form'
          onSubmit={form.handleSubmit(onSubmit, onError)}
          onReset={() => form.reset()}
        >
          {/* Contract Information */}
          <SectionLayout
            header={{
              title: 'Create License',
              link: '/dashboard/settings/legal/licenses',
            }}
          >
            <SectionsAccordion header='License Information'>
              <CreateLicense formGet={formGet} isEdit={!!isEdit} />
            </SectionsAccordion>
          </SectionLayout>

          {/* From Actions (submit/reset) */}
          <FormActions />
        </form>
      </FormProvider>

      {/* Ready to render Alertbar */}
      <AlertBar
        onClose={() => setAlertBarProps({ message: '' })}
        {...alertBarProps}
      />
    </>
  );
};

export default CreateLicenseContainer;
