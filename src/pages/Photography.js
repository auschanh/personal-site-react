import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { photos } from '../data/photographyData';

const Photography = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-dark-navy">
      <div className="section sm:container pt-32 pb-24 px-6 lg:px-16">

        {/* Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm body-text hover:text-teal-600 dark:hover:text-teal-green transition-colors"
          >
            <i className="fa-solid fa-arrow-left text-xs" />
            Portfolio
          </Link>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold font-mono dark:text-white mb-2">
          / photography
        </h1>
        <p className="text-sm body-text mb-12">
          A collection of photos from my travels and everyday life. Click any photo to expand.
        </p>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-4 cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full block transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium leading-tight drop-shadow-lg">
                  {photo.title}
                </p>
                {photo.credit && (
                  <p className="text-white/70 text-[10px] mt-0.5">📸 {photo.credit}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        plugins={[Captions, Counter, Fullscreen, Zoom]}
        styles={{ root: { '--yarl__color_backdrop': 'rgba(0,0,0,.85)' } }}
        zoom={{ maxZoomPixelRatio: 2, scrollToZoom: true }}
        counter={{ container: { style: { top: 0, left: 0 } } }}
        slides={photos.map((p) => ({
          src: p.src,
          title: p.title,
          description: p.credit ? `📸 Credits: ${p.credit}` : '',
        }))}
      />
    </div>
  );
};

export default Photography;
