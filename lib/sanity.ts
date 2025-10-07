import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';


const projectId = '5cfj6cgg'; 
const dataset = 'production';
const apiVersion = '2025-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
});

export const urlFor = (source: any) => 
  createImageUrlBuilder({ 
    projectId,
    dataset
  }).image(source);


export const testConnection = async () => {
  try {
    const data = await client.fetch('count(*)');
    console.log('Sanity connection successful!', data);
    return true;
  } catch (error) {
    console.error('Sanity connection failed:', error);
    return false;
  }
};