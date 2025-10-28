import React from 'react';
import { type Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCardComponent: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <h3 className="text-xl font-semibold">{experience.role}</h3>
        <p className="text-sm text-neutral-500">{experience.duration}</p>
      </div>
      <p className="text-md text-neutral-600 font-medium">{experience.company}</p>
      <ul className="list-disc list-inside pt-1 space-y-1 text-neutral-700">
        {experience.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export const ExperienceCard = React.memo(ExperienceCardComponent);