import React from 'react';
import { Parasite } from '../types';
import { StageImage } from './StageImage';

export const ParasiteCard: React.FC<{ parasite: Parasite }> = ({ parasite }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8 scroll-mt-28" id={parasite.id}>
      <div className="border-b border-gray-100 bg-gradient-to-r from-teal-50 to-white px-6 py-5">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-y-2">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                {parasite.chineseName}
            </h3>
            <span className="text-sm md:text-base font-mono font-medium text-teal-700 italic">
                {parasite.scientificName}
            </span>
        </div>
        <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
          分类：{parasite.category}
        </div>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed border-l-4 border-teal-200 pl-3">
            {parasite.description}
        </p>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {parasite.stages.map((stage) => (
                <StageImage key={stage.id} stage={stage} />
            ))}
        </div>
      </div>
    </div>
  );
}
