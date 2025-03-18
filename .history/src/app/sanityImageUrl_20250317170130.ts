import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanityClient';
import { SanityImageSource } from '@/types/sanity-types'; // Should resolve to src/types/sanity-types.ts

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}