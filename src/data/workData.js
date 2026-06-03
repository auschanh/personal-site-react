import React from 'react';
import {
  kafkaWhite,
  kafkaBlack,
  confluentTealLogo,
  javaLogo,
  dockerLogo,
  sqlLogo,
  sqlLogoBlack,
  reactLogo,
  typescriptLogo,
  sharepointLogo,
  powerautomateLogo,
  psyncopateLogo,
} from '../assets/icons';
import opsLogo from '../assets/logos/ops-logo.png';

const kw = (text) => (
  <strong className="text-teal-600 dark:text-teal-green">{text}</strong>
);

export const workExperiences = [
  {
    id: 'psyncopate',
    company: 'Psyncopate Technologies',
    logo: psyncopateLogo,
    logoAlt: 'Psyncopate Logo',
    title: 'ASSOCIATE CONSULTING ENGINEER',
    period: 'Jan 2025 - Present',
    responsibilities: [
      <>
        Resolved P1/P2 incidents for a low-latency, multi-AZ on-premises {kw('Kafka')}{' '}
        cluster, conducting root cause analysis (RCA) for broker performance,{' '}
        {kw('Zookeeper')} coordination, and security misconfigurations to ensure 99.9% SLA
      </>,
      <>
        Streamlined troubleshooting and knowledge-sharing by documenting{' '}
        {kw('Kafka Broker/Zookeeper')} configurations, and security protocols for
        multi-AZ deployments
      </>,
      <>
        Developed serializing avro {kw('Producer and Consumer')}, for a customized
        Confluent library according to customer's needs.
      </>,
    ],
    skills: [
      { name: 'Apache\nKafka', iconDark: kafkaWhite, iconLight: kafkaBlack },
      { name: 'Confluent', icon: confluentTealLogo },
      { name: 'Java', icon: javaLogo },
      { name: 'Docker', icon: dockerLogo },
      { name: 'KSQL', iconDark: sqlLogo, iconLight: sqlLogoBlack },
    ],
  },
  {
    id: 'ontario-ministry',
    company: 'Ontario Ministry of Children and Community Services',
    logo: opsLogo,
    logoAlt: 'Ontario Public Service Logo',
    title: 'SOFTWARE DEVELOPER',
    period: 'May 2021 - Aug 2022 (1yrs 4mos)',
    responsibilities: [
      <>
        Created and maintained {kw('SharePoint')} sites based on client tickets and
        requirements
      </>,
      <>
        Automated tasks with {kw('Power Automate')} to track files, populate
        lists/tables, email and notify clients
      </>,
      <>
        Utilized {kw('ReactJS')} and {kw('SharePoint Framework (SPFx)')} to uniquely
        customize and develop client {kw('SharePoint site')}
      </>,
    ],
    highlights: [
      <>
        {kw('Selected as a speaker for CYSSC Learning and Engagement Conference')} among
        multiple co-op students - spoke to over 300+ employees about a solo project on
        building a Sharepoint site and workflow for client, dramatically reducing time to
        populate, sort and filter data from applicants.
      </>,
      <>
        Developed a workflow that {kw('automated ticket requests')} from clients onto team
        task list, removing manual insertion of data and significantly improving requests
        to assigned ticket times. The workflow involved automated emailing, assigning
        priority and inserting into ticket list.
      </>,
    ],
    skills: [
      { name: 'React', icon: reactLogo },
      { name: 'TypeScript', icon: typescriptLogo },
      { name: 'SQL', iconDark: sqlLogo, iconLight: sqlLogoBlack },
      { name: 'SharePoint', icon: sharepointLogo },
      { name: 'Power\nAutomate', icon: powerautomateLogo },
    ],
  },
];

export const otherExperiences = [
  {
    id: 'starbucks',
    company: 'Starbucks (Retail)',
    title: 'BARISTA',
    period: 'Oct 2023 - Jan 2025 (1yr 3mos)',
    description: (
      <>
        Provided exceptional customer service through customer connections, and by
        crafting quality hand crafted drinks.{' '}
        {kw('Partner of the Quarter (POQ) Winner Q4.')}
      </>
    ),
  },
  {
    id: 'longos',
    company: 'Longos Corporation (Retail)',
    title: 'DAIRY CLERK',
    period: 'Jul 2016 - April 2021 (4yrs 8mos)',
    description: (
      <>
        Daily tasks included: solo closing the department on closing days, stocking
        inventory and assisting customers. A lot of my interpersonal skills were
        developed here, such as {kw('teamwork')}, {kw('initiative')}, and{' '}
        {kw('customer service')}.
      </>
    ),
  },
  {
    id: 'shoppers',
    company: 'Shoppers Drug Mart (Retail)',
    title: 'ASSISTANT PHARMACIST',
    period: 'Nov 2014 - Feb 2015 (4mos)',
    description:
      'Stocked inventory of medicines and drugs, filled customer prescriptions with precise instructions (weighing, removing, adding etc) and organized files.',
  },
];
