import React, { useState, useEffect, useCallback } from 'react';
import { type Photo } from '../types';
import { Modal } from './Modal';
import { IconChevronLeft, IconChevronRight } from './Icons';

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGalleryComponent: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = useCallback(() => {
    setCurrentIndex(null);
  }, []);

  const showNextImage = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }
  }, [currentIndex, photos.length]);

  const showPrevImage = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    }
  }, [currentIndex, photos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, closeModal, showNextImage, showPrevImage]);

  const selectedImage = currentIndex !== null ? photos[currentIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={photo.id} className="relative group overflow-hidden rounded-lg cursor-pointer" onClick={() => openModal(index)}>
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedImage} onClose={closeModal}>
        {selectedImage && (
          <div className="relative">
            {/* Using a wrapper div for image and caption to handle sizing */}
            <div className="flex flex-col items-center">
                <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt} 
                    className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl bg-neutral-800"
                />
                <p className="mt-4 text-center text-neutral-800 dark:text-neutral-200 font-medium">{selectedImage.caption}</p>
            </div>

            {/* Prev Button */}
            <button 
                onClick={(e) => { e.stopPropagation(); showPrevImage(); }} 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all z-10"
                aria-label="Previous image"
            >
                <IconChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            {/* Next Button */}
            <button 
                onClick={(e) => { e.stopPropagation(); showNextImage(); }} 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all z-10"
                aria-label="Next image"
            >
                <IconChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};

export const PhotoGallery = React.memo(PhotoGalleryComponent);