'use client';

import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

interface BackgroundPhoto {
  _id: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
    };
  };
  title: string;
}

export default function ContactHero() {
  const [backgroundPhoto, setBackgroundPhoto] = useState<BackgroundPhoto | null>(null);

  useEffect(() => {
    async function fetchBackgroundPhoto() {
      try {
        const data = await client.fetch(`
          *[_type == "photo"] | order(_createdAt desc)[0]
        `);
        setBackgroundPhoto(data);
      } catch (error) {
        console.error('Error fetching background photo:', error);
      }
    }
    fetchBackgroundPhoto();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        alert('Thank you! Your message has been sent.');
        form.reset();
      }
    } catch {
      alert('There was an error. Please try again.');
    }
  };

  return (
    <section id="contact" className="min-h-[70vh] flex items-center justify-center relative bg-cover bg-center py-20">
      {/* Dynamic background from Sanity */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundPhoto 
            ? `url(${urlFor(backgroundPhoto.image).width(1920).url()})`
            : 'linear-gradient(to right, #A8D5DB, #D0BBA8)'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Decorative elements matching your theme */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sand/30 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="glass-card-white-premium rounded-3xl p-12 border-2 border-white/40">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-russo mb-4 text-black">Get In Touch</h2>
            <p className="text-xl font-urbanist text-gray-700">
              Ready to create something beautiful? Let&apos;s discuss your project.
            </p>
          </div>
          
          <form 
            action="https://formspree.io/f/mblallyr" 
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full glass-card-white rounded-2xl px-6 py-4 border-2 border-white/50 focus:border-sky focus:outline-none transition-colors font-urbanist"
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full glass-card-white rounded-2xl px-6 py-4 border-2 border-white/50 focus:border-sky focus:outline-none transition-colors font-urbanist"
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full glass-card-white rounded-2xl px-6 py-4 border-2 border-white/50 focus:border-sky focus:outline-none transition-colors resize-vertical font-urbanist"
                required
                placeholder="Tell me about your project..."
              />
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                className="glass-card glass-card-hover px-12 py-4 bg-sky/30 border-2 border-sky/40 text-sky text-xl font-bold rounded-full hover:bg-sky/50 hover:text-white transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}