import ccaak from '../assets/CCAAK Certification.png';

export function CertCard({
    title, certImage, description, points, link
}) {
    return (
        <div className="section-desc flex flex-col sm:flex-row">
              <div>
                <div className='text-xl font-extrabold my-4 mb-8 text-black dark:text-white'>
                  {title}
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-center lg:items-start'>
                  <img src={certImage} className="mb-8 h-60 sm:h-80" alt="Confluent Certified Administrator for Apache Kafka"></img>
                  <div className='sm:ml-6 mt-4 sm:mt-0 dark:text-zinc-300'>
                    <a className="font-bold dark:text-neon-teal text-teal-300 dark:hover:text-gray-600 hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-2 hover:underline-offset-[6px] font-mono" href={link} target="_blank"
                rel="noopener noreferrer">🔗 View Certification Page</a>
                    <br /><br/>
                    <p>{description}</p>
                    <ul className='list-disc ml-4 mt-2 font-mono text-base'>
                      {
                        points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default CertCard;