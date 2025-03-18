import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanityClient';
import { SanityImageSource } from '@/types/sanity-types'; // Import the custom type

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}