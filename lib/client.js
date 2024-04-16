import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '91h6cpj2',
  dataset: 'production',
  apiVersion: '2024-03-15',
  useCdn: true,
  token: 'skHZtUkyPju0eBzfoPRL90s159TdHxzDSaSOM7HvNMUedDp2z8ZGPu0dWxKx9Dd784TygC9cc0tlQcxIzqDyoHyFBvC66QmgltDdJYzOZiM9Wm69BW1WKeOQ9dVw1Hy3f8lIiIUR5LbRui5B5qDfcyYHP24GB1aMXXM2RpqCe3KmWPQU4Rd4'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);