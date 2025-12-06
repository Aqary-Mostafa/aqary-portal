import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const SectionsAccordion = ({
  children,
  header,
  id,
}: { header: string; id?: string } & PropsWithChildren) => {
  const [expend, setExpend] = useState(true);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // history.replaceState(null, '', `#${id}`);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      },
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, [id]);

  return (
    <Accordion
      expanded={expend}
      onChange={(_, val) => setExpend(val)}
      id={id}
      ref={sectionRef}
    >
      <AccordionSummary
        sx={{
          borderBottom: expend ? '1px solid #E0E0E0' : '',
        }}
        expandIcon={<IoIosArrowDown />}
      >
        <Typography component='span'>{header}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default SectionsAccordion;
