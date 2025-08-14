
import ccaak from '../assets/CCAAK Certification.png';
import ccdak from '../assets/CCDAK Certification_page-0001.jpg'
import CertCard from '../components/CertCard';

const certs = [{
  title: 'Confluent Certified Developer for Apache Kafka (July 2025)',
  certImage: ccdak,
  description: 'Obtained CCDAK, validating skills with Confluent, Confluent Platform and Apache Kafka. Demonstrates an understanding of:',
  points: ['Kafka and Confluent fundamentals', 'publishing and subscribing data within Kafka clusters', 'Kafka Streams applications', 'architectural concepts and components with Kafka Dev APIs'],
  link: 'https://certificates.confluent.io/6055316c-028b-4838-a747-1a7dd4f78005#acc.ygetuNUf'
}, {
  title: 'Confluent Certified Administrator for Apache Kafka (December 2024)',
  certImage: ccaak,
  description: 'Obtained CCAAK, showcasing administrating abilities with Confluent and Apache Kafka. Demonstrates an understanding of:',
  points: ['Kafka and Confluent fundamentals', 'configuring and deploying brokers, topics, partitions', 'monitoring Kafka clusters', 'managing authorization, authentication and basic security principles of clusters and clients'],
  link: 'https://certificates.confluent.io/16f1034f-aa22-40c5-ad14-db3a7cbea5bb#acc.7Mcymg3r'
}
]

const Certifications = () => {
    return (
        <div id="certifications" className="bg-slate-100 py-40 dark:bg-navy">
      <div
        className="certifications section sm:px-auto row-span-1 text-black sm:container"
      >
        <h1 className="text-3xl font-bold font-mono underline decoration-rose-600 decoration-4 underline-offset-8 dark:text-white">
          / Certifications
        </h1>
        <br />
        <br />
        <div data-aos="fade-zoom-in"
            data-aos-duration="2000"
            data-aos-offset="250">

           {
            certs.map((cert, i) => (
              <CertCard 
                key={i}
                title={cert.title}
                certImage={cert.certImage}
                description={cert.description}
                points={cert.points}
                link={cert.link}
              />
            ))}

        </div>
        
      </div>
    </div>
    )
};

export default Certifications;