import React from 'react';
import CertCard from '../components/CertCard';
import { certs } from '../data/certData';

const Certifications = () => (
  <div id="certifications" className="bg-slate-100 py-40 dark:bg-navy">
    <div className="certifications section sm:px-auto row-span-1 text-black sm:container">
      <h1 className="text-3xl font-bold font-mono dark:text-white">
        / certifications
      </h1>
      <br />
      <br />
      <div
        data-aos="fade-zoom-in"
        data-aos-duration="2000"
        data-aos-offset="250"
      >
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
);

export default Certifications;
