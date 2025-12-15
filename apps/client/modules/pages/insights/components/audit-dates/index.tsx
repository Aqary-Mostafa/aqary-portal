'use client';

import { Root, Row, Label, Value } from './styled';
import dayjs from 'dayjs';

type AuditDatesProps = {
  data: {
    createdAt: Date | string;
    updatedAt: Date | string;
  };
};

const FORMAT = 'DD/MM/YYYY - HH:mm:ss';

const formatDateTime = (date: Date | string): string => {
  const parsed = dayjs(date);

  return parsed.isValid() ? parsed.format(FORMAT) : '--';
};

const AuditDates = ({ data }: AuditDatesProps) => {
  const { createdAt, updatedAt } = data;

  return (
    <Root>
      <Row>
        <Label>Created:</Label>
        <Value>{formatDateTime(createdAt)}</Value>
      </Row>

      <Row>
        <Label>Updated:</Label>
        <Value>{formatDateTime(updatedAt)}</Value>
      </Row>
    </Root>
  );
};

export default AuditDates;
