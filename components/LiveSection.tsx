
import React from 'react';
import { STREAMERS } from '../constants';

const LiveSection: React.FC = () => {
  return (
    <section id="live" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-rose-500 font-bold mb-4">Waiting for You</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1C1C1C]">Unveiling Tonight</h3>
          </div>
          <button className="text-sm font-semibold border-b border-black/10 pb-1 hover:text-rose-600 hover:border-rose-600 transition-all uppercase tracking-widest text-[#1C1C1C]/60">
            See More Secrets
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STREAMERS.map((streamer) => (
            <div key={streamer.id} className="group relative aspect-[2/3] overflow-hidden rounded-2xl cursor-pointer card-shadow">
              <img 
                src={streamer.imageUrl} 
                alt={streamer.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-40 transition-opacity group-hover:opacity-60"></div>
              
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                {streamer.isLive && (
                  <span className="bg-rose-600 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1.5 animate-pulse text-white">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    ACTIVE
                  </span>
                )}
                <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded text-[#1C1C1C]">
                  {streamer.viewers.toLocaleString()} WITNESSING
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-rose-300 text-[10px] uppercase tracking-widest font-bold mb-1 drop-shadow-sm">{streamer.category}</p>
                <h4 className="text-2xl font-serif mb-1 text-white">{streamer.name}, {streamer.age}</h4>
                <p className="text-white/80 text-xs mb-4 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {streamer.location}
                </p>
                
                <button className="w-full bg-white text-rose-600 py-3 rounded-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 active:scale-95 shadow-lg">
                  Join Her Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
