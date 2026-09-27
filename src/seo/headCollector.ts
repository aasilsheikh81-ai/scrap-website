import { createContext } from 'react';
import type { SeoData } from './head';

/**
 * During prerendering the server provides a collector; <Seo> reports its data
 * synchronously so the build script can write it into the static <head>.
 * In the browser there is no collector and the head is swapped in an effect.
 */
export const HeadCollectorContext = createContext<((seo: SeoData) => void) | null>(null);
