import React from 'react';
import { type Education } from '../types';

interface EducationCardProps {
  education: Education;
}

const EducationCardComponent: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">{education.institution}</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{education.duration}</p>
      </div>
      <p className="text-md text-neutral-600 dark:text-neutral-300">{education.degree}</p>
    </div>
  );
};

export const EducationCard = React.memo(EducationCardComponent);