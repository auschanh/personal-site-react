
import ccaak from '../assets/CCAAK Certification.png';

const Certifications = () => {
    return (
        <div id="certifications" className="bg-slate-100 py-40 dark:bg-navy">
      <div
        className="certifications section sm:px-auto row-span-1 px-10 text-black sm:container"
      >
        <h1 className="text-3xl font-bold font-mono underline decoration-rose-600 decoration-4 underline-offset-8 dark:text-white">
          / Certifications
        </h1>
        <br />
        <br />
        <div data-aos="fade-zoom-in"
            data-aos-duration="2000"
            data-aos-offset="250">

            <div className="section-desc flex flex-col sm:flex-row">
              <div>
                <div className='text-xl font-extrabold my-4 mb-8 text-black dark:text-zinc-300'>
                  Confluent Certified Administrator for Apache Kafka (December 2024)
                </div>
                <div className='flex sm:flex-row items-start'>
                  <img src={ccaak} className="h-60 sm:h-80" alt="Confluent Certified Administrator for Apache Kafka"></img>
                  <div className='sm:ml-6 mt-4 sm:mt-0 dark:text-zinc-300'>
                    <a className="dark:text-teal-600 text-teal-300 dark:hover:text-gray-600 hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-2 hover:underline-offset-[6px] font-mono" href="https://certificates.confluent.io/16f1034f-aa22-40c5-ad14-db3a7cbea5bb#acc.7Mcymg3r" target="_blank"
                rel="noopener noreferrer">View Certification Page</a>
                    <br /><br/>
                    <p>Obtained CCAAK, showcasing administrating abilities with Confluent and Apache Kafka. Demonstrates an understanding of:</p>
                    <ul className='list-disc ml-4 mt-2 font-mono text-base'>
                      <li>Kafka and Confluent fundamentals</li>
                      <li>configuring and deploying brokers, topics, partitions</li>
                      <li>monitoring Kafka clusters</li>
                      <li>managing authorization, authentication and basic security principles of clusters and clients </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

        </div>
        
      </div>
    </div>
    )
};

export default Certifications;