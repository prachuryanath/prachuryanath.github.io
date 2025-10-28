import React, { useState } from 'react';
import { type Photo } from '../types';
import { Modal } from './Modal';

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGalleryComponent: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative group overflow-hidden rounded-lg cursor-pointer" onClick={() => openModal(photo)}>
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
          <div className="flex flex-col items-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="mt-4 text-center text-neutral-800 dark:text-neutral-200 font-medium">{selectedImage.caption}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export const PhotoGallery = React.memo(PhotoGalleryComponent);
