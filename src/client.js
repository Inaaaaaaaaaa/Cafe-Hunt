//where we connect sanity client with react application
// sets up a connection to the Sanity CMS (Content Management System) from a React application.
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create a Sanity client instance with configuration options
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-07', // Use the current date in UTC format
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN, // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);

// Used to generate URLs for images stored in your Sanity Studio
export const urlFor = (source) => builder.image(source);