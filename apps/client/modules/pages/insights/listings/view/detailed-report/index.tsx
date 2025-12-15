'use client';

import { ModalRoot, Section } from './styled';

import PerformanceStats from './sections/performance-stats';
import CompletionSection from './sections/completion-section';
import PriceSection from './sections/price-section';
import AgentSection from './sections/agent-section';
import ListingDetails from '../../../components/listing-details';

const DetailedReportDrawer = () => {
  return (
    <ModalRoot>
      <ListingDetails
        data={{
          imageUrl:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Apartment',
          verified: true,
          price: 900000,
          refNumber: 'AQR-123456',
          location: 'New York, USA',
          beds: '3',
          baths: 2,
          area: 1500,
        }}
      />

      <Section>
        <PerformanceStats />
      </Section>

      <Section>
        <CompletionSection />
      </Section>

      <Section>
        <PriceSection />
      </Section>

      <Section>
        <AgentSection />
      </Section>
    </ModalRoot>
  );
};

export default DetailedReportDrawer;
