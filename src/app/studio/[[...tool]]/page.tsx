/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { useEffect, useRef } from 'react';

export default function StudioPage() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    let disposed = false;

    (async () => {
      const [{ renderStudio }, configModule] = await Promise.all([
        import('sanity'),
        import('../../../../sanity.config'),
      ]);

      const studioConfig = configModule.default ?? configModule;
      if (disposed) return;

      renderStudio(mountRef.current!, studioConfig, {
        reactStrictMode: false,
        basePath: '/studio',
      });
    })();

    return () => {
      disposed = true;
    };
  }, []);

  return <div id="sanity" ref={mountRef} style={{ minHeight: '100vh' }} />;
}
