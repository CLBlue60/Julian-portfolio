'use client';

import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

interface BackgroundPhoto {
  _id: string;
  image: any;
  title: string;
}

export default function ContactHero() {
  const [backgroundPhoto, setBackgroundPhoto] = useState<BackgroundPhoto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBackgroundPhoto() {
      try {
        const data = await client.fetch(`
          *[_type == "photo"] | order(_createdAt desc)[0]
        `);
        setBackgroundPhoto(data);
      } catch (error) {
        console.error('Error fetching background photo:', error);
      } finally {
        setLoading(false);
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
    } catch (error) {
      alert('There was an error. Please try again.');
    }
  };

  return (
    <section id="contact" className="min-h-[70vh] flex items-center justify-center relative bg-cover bg-center">
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
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-sky">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-black">Get In Touch</h2>
            <p className="text-lg text-gray-700">
              Ready to create something beautiful? Let's discuss your project.
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
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-sky focus:outline-none"
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-sky focus:outline-none"
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-sky focus:outline-none resize-vertical"
                required
                placeholder="Tell me about your project..."
              />
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                className="px-8 py-3 bg-sky text-black text-lg font-semibold rounded-lg hover:bg-sand transition-colors"
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