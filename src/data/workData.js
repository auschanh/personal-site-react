import React from 'react';
import {
  kafkaWhite,
  kafkaBlack,
  confluentTealLogo,
  dockerLogo,
  sqlLogo,
  sqlLogoBlack,
  reactLogo,
  typescriptLogo,
  sharepointLogo,
  powerautomateLogo,
  psyncopateLogo,
  ansibleLogo,
  kubernetesLogo,
  terraformLogo,
  pythonLogo,
  grafanaLogo,
  mysqlLogo,
  q4Logo,
  html5Logo,
  css3Logo,
  javascriptLogo,
  lighthouseLogo,
  prometheusLogo,
  helmLogo,
} from '../assets/icons';
import opsLogo from '../assets/logos/ops-logo.png';

const kw = (text) => (
  <strong className="text-teal-600 dark:text-teal-green">{text}</strong>
);

export const workExperiences = [
    {
    id: 'q4 inc',
    company: 'Q4 Inc',
    logo: q4Logo,
    logoAlt: 'Q4 inc logo',
    title: 'Lead Web Accessibility Specialist',
    period: 'June 2026 - Present',
    responsibilities: [
      <>
        TBD 🙂
      </>,
    ],
    skills: [
      { name: 'HTML5',         icon: html5Logo },
      { name: 'CSS',           icon: css3Logo },
      { name: 'JavaScript',    icon: javascriptLogo },
      { name: 'Lighthouse',    icon: lighthouseLogo },
      { name: 'WAVE' },
      { name: 'NVDA' },
      { name: 'JAWS' },
      { name: 'Level Access' },
    ]
  },
  {
    id: 'psyncopate',
    company: 'Psyncopate Technologies',
    logo: psyncopateLogo,
    logoAlt: 'Psyncopate Logo',
    title: 'Associate Consulting Engineer',
    period: 'Jan 2025 - May 2026',
    responsibilities: [
      <>
        Deployed and designed TIBCO Rendezvous Network Service on {kw('Kubernetes')} including a high level diagram and Operator based Custom Resources to support on-premises to cloud communications
      </>,
      <>
        Built out custom dashboards with {kw('Grafana')} for network service on {kw('Kubernetes')}, including detailed analysis on metrics, and scripted runbook of deployment with dashboards as config maps - providing observability and monitoring needs
      </>,
      <>
        Supported on-call operations for a low-latency, on-premises Multi-Region {kw('Kafka')} Cluster (MRC), participating in {kw('Confluent')} Platform upgrades via {kw('Ansible')} and providing P1/P2 incident triage, including broker performance, and misconfigurations ensuring 99.9% SLA
      </>,
      <>
        Developed serializing avro {kw('Producer and Consumer')}, for a customized {kw('Confluent')} library according to customer's needs
      </>,
    ],
    skills: [
      { name: 'Kafka', iconDark: kafkaWhite, iconLight: kafkaBlack },
      { name: 'Confluent', icon: confluentTealLogo },
      { name: 'Ansible', icon: ansibleLogo },
      { name: 'Kubernetes', icon: kubernetesLogo },
      { name: 'Terraform', icon: terraformLogo },
      { name: 'Python', icon: pythonLogo },
      { name: 'Grafana', icon: grafanaLogo },
      { name: 'Prometheus', icon: prometheusLogo },
      { name: 'Helm', icon: helmLogo },
      { name: 'Docker', icon: dockerLogo },
    ],
  },
  {
    id: 'ontario-ministry',
    company: 'Ontario Ministry of Children and Community Services',
    logo: opsLogo,
    logoAlt: 'Ontario Public Service Logo',
    title: 'Software Developer',
    period: 'May 2021 - Aug 2022',
    responsibilities: [
      <>
        Developed a customized {kw('SharePoint')} site using {kw('SharePoint Framework (SPFx)')}, and {kw('React')} ensuring compliance with {kw('Web Content Accessibility Guideline (WCAG)')}, enhancing site
        accessibility through a three tiered testing methodology - utilized WAVE, screen reader tools like NVDA, keyboard navigation and focus order for manual testing
      </>,
      <>
        Modernized team tracking ticket system using {kw('Power Automate')}, MS Forms and {kw('SharePoint')}, substantially reducing task assignment and data input time by over half
      </>,
      <>
        Automated tasks with {kw('Power Automate')} to track files, populate
        lists/tables, email and notify clients for solo client project
      </>,
    ],
    highlights: [
      <>
        Selected as a speaker to 300+ coworkers, delivering insights on daily client engagement and website creation, highlighting effective communication and project development abilities
      </>
    ],
    skills: [
      { name: 'React', icon: reactLogo },
      { name: 'TypeScript', icon: typescriptLogo },
      { name: 'MySQL', icon: mysqlLogo },
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
