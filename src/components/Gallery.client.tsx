'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

interface Photo {
  _id: string;
  title: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
    };
  };
  category?: string;
}

const MotionImage = motion.create(Image);

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const data = await client.fetch('*[_type == "photo"] | order(_createdAt desc)');
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  const categories = ['all', 'landscape', 'portrait', 'event', 'street'];
  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <section id="gallery" className="min-h-screen py-20 bg-sand">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="glass-card-white rounded-3xl p-12">
            <div className="text-2xl font-urbanist text-black">Loading gallery...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="min-h-screen bg-sand overflow-hidden">
      {/* Header - Fixed at top */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-20 pb-16"
      >
        <div className="glass-card-white-premium rounded-3xl p-12 mb-8 mx-4 max-w-7xl mx-auto">
          <h2 className="text-5xl font-russo mb-6 text-black">Gallery</h2>
          <p className="text-xl font-urbanist text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A curated collection of moments captured through the lens
          </p>
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentIndex(0);
            }}
            className={`glass-card-white glass-card-hover px-8 py-3 rounded-full font-urbanist font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-sky/80 text-white border-2 border-white/60'
                : 'bg-white/80 text-gray-700 border-2 border-white/50 hover:bg-white hover:border-white/70'
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* FULL-WIDTH INTERACTIVE CAROUSEL */}
      <div className="relative h-screen-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={filteredPhotos[currentIndex]?._id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {filteredPhotos[currentIndex] && (
              <div
                className="w-full h-full flex items-center justify-center cursor-pointer bg-transparent"
                onClick={() => setSelectedImage(currentIndex)}
              >
                <MotionImage
                  src={urlFor(filteredPhotos[currentIndex].image).url()}
                  alt={filteredPhotos[currentIndex].title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain"
                  priority={currentIndex === 0}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* TRANSPARENT TITLE BAR AT TOP */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-4 min-w-[300px] text-center border border-white/20">
                  <h3 className="font-russo text-2xl text-black mb-1">
                    {filteredPhotos[currentIndex].title}
                  </h3>
                  {filteredPhotos[currentIndex].category && (
                    <span className="inline-block bg-white/30 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-urbanist font-medium border border-white/40">
                      {filteredPhotos[currentIndex].category}
                    </span>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {filteredPhotos.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              className="glass-card-white absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-3xl hover:scale-110 transition-transform duration-300 shadow-2xl z-20"
            >
              ‹
            </button>
            <button
              onClick={nextPhoto}
              className="glass-card-white absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-3xl hover:scale-110 transition-transform duration-300 shadow-2xl z-20"
            >
              ›
            </button>
          </>
        )}

        {/* Photo Counter */}
        {filteredPhotos.length > 1 && (
          <div className="absolute bottom-8 right-8 glass-card-white rounded-2xl px-6 py-3">
            <span className="font-urbanist text-lg text-gray-700">
              {currentIndex + 1} / {filteredPhotos.length}
            </span>
          </div>
        )}

        {/* Thumbnail Preview Strip */}
        {filteredPhotos.length > 1 && (
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo._id}
                whileHover={{ scale: 1.1 }}
                className={`w-12 h-12 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${index === currentIndex ? 'border-sky scale-110' : 'border-white/50'
                  }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  src={urlFor(photo.image).width(80).height(80).url()}
                  alt={photo.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="glass-card-white absolute -top-16 right-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl z-10 hover:text-sky transition-colors duration-300 hover:scale-110 border border-white/40"
              >
                ×
              </button>

              <div className="glass-card-white-premium rounded-3xl p-8 max-w-4xl">
                <MotionImage
                  src={urlFor(filteredPhotos[selectedImage]?.image).url()}
                  alt={filteredPhotos[selectedImage]?.title}
                  width={1600}
                  height={1200}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl"
                  priority
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Transparent title bar for lightbox too */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 mt-6 border border-white/30">
                  <h3 className="font-russo text-2xl mb-2 text-white">{filteredPhotos[selectedImage]?.title}</h3>
                  {filteredPhotos[selectedImage]?.category && (
                    <span className="glass-card inline-block bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-urbanist font-medium border border-white/40">
                      {filteredPhotos[selectedImage]?.category}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {filteredPhotos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="glass-card-white-premium rounded-3xl p-16 max-w-2xl mx-auto">
            <div className="glass-card-white w-24 h-24 rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto">
              📷
            </div>
            <h3 className="font-russo text-3xl mb-4 text-black">No photos found</h3>
            <p className="font-urbanist text-xl text-gray-700">
              Add some photos in Sanity Studio to see them here!
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}