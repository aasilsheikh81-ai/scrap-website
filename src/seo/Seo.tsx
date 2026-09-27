import { useContext, useEffect } from 'react';
import { applyHead, type SeoData } from './head';
import { HeadCollectorContext } from './headCollector';

export default function Seo(props: SeoData) {
  const collect = useContext(HeadCollectorContext);
  collect?.(props);

  const key = JSON.stringify(props);
  useEffect(() => {
    applyHead(JSON.parse(key) as SeoData);
  }, [key]);

  return null;
}
