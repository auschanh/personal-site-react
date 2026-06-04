import React from 'react';
import CertCard from '../components/CertCard';
import { certs } from '../data/certData';

const Certifications = () => (
  <div id="certifications" className="bg-slate-100 py-20 dark:bg-navy">
    <div className="certifications section sm:px-auto row-span-1 text-black sm:container">
      <h1 className="text-3xl font-bold font-mono dark:text-white mb-10">
        / certifications
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-offset="150"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
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
  </div>
);

export default Certifications;
