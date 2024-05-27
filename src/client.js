import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import { createClient } from '@sanity/client';

// Create a Sanity client instance with configuration options
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

// Used to generate URLs for images stored in your Sanity Studio.
export const urlFor = (source) => builder.image(source);   

console.log("Sanity Project ID:", process.env.REACT_APP_SANITY_PROJECT_ID);
console.log("Sanity Token:", process.env.REACT_APP_SANITY_TOKEN);