'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

interface Photo {
  _id: string;
  title: string;
  image: any;
  category?: string;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

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
    <section id="gallery" className="min-h-screen py-20 bg-sand">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="glass-card-white-premium rounded-3xl p-12 mb-8">
            <h2 className="text-5xl font-russo mb-6 text-black">Gallery</h2>
            <p className="text-xl font-urbanist text-gray-700 max-w-2xl mx-auto leading-relaxed">
              A curated collection of moments captured through the lens
            </p>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`glass-card-white glass-card-hover px-8 py-3 rounded-full font-urbanist font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-sky/80 text-white border-2 border-white/60'
                  : 'bg-white/80 text-gray-700 border-2 border-white/50 hover:bg-white hover:border-white/70'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* MASONRY GRID */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="glass-card-white glass-card-hover rounded-3xl overflow-hidden p-6">
                {/* IMAGE CONTAINER WITH WHITE GLASS FRAME */}
                <div className="glass-card-white rounded-2xl overflow-hidden mb-4 p-4 border-2 border-white/50">
                  <img
                    src={urlFor(photo.image).width(400).url()}
                    alt={photo.title}
                    className="w-full h-auto rounded-xl transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* CONTENT */}
                <div className="p-2">
                  <h3 className="font-russo text-xl mb-3 text-black group-hover:text-sky transition-colors duration-300">
                    {photo.title}
                  </h3>
                  {photo.category && (
                    <span className="glass-card-white inline-block bg-white/80 border border-white/60 text-gray-800 px-4 py-2 rounded-full text-sm font-urbanist font-medium">
                      {photo.category}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal with White Glass Effect */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-6xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="glass-card-white absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-gray-800 text-2xl z-10 hover:text-sky transition-colors duration-300 hover:scale-110"
                >
                  ×
                </button>
                
                <div className="glass-card-white-premium rounded-3xl p-8">
                  <img
                    src={urlFor(photos[selectedImage].image).url()}
                    alt={photos[selectedImage].title}
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                  />
                  
                  <div className="glass-card-white rounded-2xl p-6 mt-6 border-2 border-white/50">
                    <h3 className="font-russo text-2xl mb-2 text-gray-800">{photos[selectedImage].title}</h3>
                    {photos[selectedImage].category && (
                      <span className="glass-card-white inline-block bg-white/80 border border-white/60 text-gray-800 px-4 py-2 rounded-full text-sm font-urbanist font-medium">
                        {photos[selectedImage].category}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State with White Glass Effect */}
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
      </div>
    </section>
  );
}