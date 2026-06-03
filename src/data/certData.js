import React from 'react';
import ccaak from '../assets/certs/CCAAK Certification.png';
import ccdak from '../assets/certs/CCDAK Certification_page-0001.jpg';

export const certs = [
  {
    title: (
      <>
        Confluent Certified Developer for Apache Kafka{' '}
        <span className="text-black dark:text-zinc-400 font-mono">(July 2025)</span>
      </>
    ),
    certImage: ccdak,
    description:
      'Obtained CCDAK, validating skills with Confluent, Confluent Platform and Apache Kafka. Demonstrates an understanding of:',
    points: [
      'Kafka and Confluent fundamentals',
      'publishing and subscribing data within Kafka clusters',
      'Kafka Streams applications',
      'architectural concepts and components with Kafka Dev APIs',
    ],
    link: 'https://certificates.confluent.io/6055316c-028b-4838-a747-1a7dd4f78005#acc.ygetuNUf',
  },
  {
    title: (
      <>
        Confluent Certified Administrator for Apache Kafka{' '}
        <span className="text-black dark:text-zinc-400 font-mono">(December 2024)</span>
      </>
    ),
    certImage: ccaak,
    description:
      'Obtained CCAAK, showcasing administrating abilities with Confluent and Apache Kafka. Demonstrates an understanding of:',
    points: [
      'Kafka and Confluent fundamentals',
      'configuring and deploying brokers, topics, partitions',
      'monitoring Kafka clusters',
      'managing authorization, authentication and basic security principles of clusters and clients',
    ],
    link: 'https://certificates.confluent.io/16f1034f-aa22-40c5-ad14-db3a7cbea5bb#acc.7Mcymg3r',
  },
];
