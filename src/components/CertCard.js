export function CertCard({ title, certImage, description, points, link }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-dark-navy border border-zinc-200 dark:border-zinc-700/50 shadow-md hover:shadow-lg transition-shadow">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={certImage}
          alt="Certification"
          className="w-full h-44 object-cover object-top"
        />
      </a>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="text-base font-bold text-teal-600 dark:text-teal-green leading-snug">
          {title}
        </div>
        <p className="text-sm body-text">{description}</p>
        {points && points.length > 0 && (
          <ul className="list-disc ml-4 space-y-1 text-sm body-text font-mono">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm font-mono font-bold text-zinc-600 dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-green transition-colors"
        >
          🔗 View Certificate
        </a>
      </div>
    </div>
  );
}

export default CertCard;
