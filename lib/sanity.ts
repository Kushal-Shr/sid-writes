import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  apiVersion: '2023-10-01',
  dataset: 'production',
  projectId: 'mp1bsymk',
  useCdn: false,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
