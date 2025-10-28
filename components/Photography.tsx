import React from 'react';
import { PhotoGallery } from './PhotoGallery';
import { ViewMoreLink } from './ViewMoreLink';
import { PHOTOGRAPHY_IMAGES } from '../constants';

interface PhotographyProps {
    navigate: (path: string) => void;
}

export const Photography: React.FC<PhotographyProps> = ({ navigate }) => {
  return (
    <div className="py-12">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-12 text-neutral-900 dark:text-white">
            Gallery
        </h1>
        <PhotoGallery photos={PHOTOGRAPHY_IMAGES} />
        <div className="text-center mt-16">
            <ViewMoreLink href="/" isBackLink navigate={navigate}>
                Back to Home
            </ViewMoreLink>
        </div>
    </div>
  );
};