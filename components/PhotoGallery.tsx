import React, { useState, useCallback } from 'react';
import { Modal } from './Modal';
import { type Photo } from '../types';

interface PhotoGalleryProps {
    photos: Photo[];
}

const PhotoGalleryComponent: React.FC<PhotoGalleryProps> = ({ photos }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleOpenModal = (index: number) => {
        setSelectedImageIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedImageIndex(null);
    };

    const handleNextImage = useCallback(() => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % photos.length);
    }, [selectedImageIndex, photos.length]);

    const handlePrevImage = useCallback(() => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + photos.length) % photos.length);
    }, [selectedImageIndex, photos.length]);

    const selectedImage = selectedImageIndex !== null ? photos[selectedImageIndex] : null;

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                    <div key={photo.id} className="group relative cursor-pointer" onClick={() => handleOpenModal(index)}>
                        <img 
                            src={photo.src} 
                            alt={photo.alt} 
                            className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                        />
                         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-2">{photo.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Modal isOpen={!!selectedImage} onClose={handleCloseModal}>
                {selectedImage && (
                    <div className="relative">
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.alt}
                            className="w-full h-auto object-contain max-h-[80vh] rounded"
                        />
                        <p className="text-center text-neutral-600 mt-2">{selectedImage.caption}</p>
                        <button 
                            onClick={handlePrevImage} 
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                            aria-label="Previous image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button 
                            onClick={handleNextImage} 
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                            aria-label="Next image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                )}
            </Modal>
        </>
    );
};

export const PhotoGallery = React.memo(PhotoGalleryComponent);