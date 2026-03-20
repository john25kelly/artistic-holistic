import { useState, useEffect } from 'react';
import { listSubfolders, listImagesInFolder } from '../services/googleDriveService';

function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Fetches the image count for every category folder in the root Drive folder.
 * Counts are fetched in parallel for speed.
 *
 * @returns {{ counts: Object.<string,number>, loading: boolean, error: string|null }}
 *           counts keys are category slugs, e.g. { animals: 5, landscapes: 16 }
 */
export function useGalleryCategories() {
  const [counts,  setCounts]  = useState({});
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCounts() {
      try {
        setLoading(true);

        // 1. Get all sub-folders
        const folders = await listSubfolders();

        // 2. Fetch file counts for all folders in parallel
        const results = await Promise.all(
          folders.map(async folder => {
            const files = await listImagesInFolder(folder.id);
            return { slug: toSlug(folder.name), count: files.length };
          })
        );

        if (!cancelled) {
          const map = {};
          results.forEach(({ slug, count }) => { map[slug] = count; });
          setCounts(map);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchCounts();
    return () => { cancelled = true; };
  }, []);

  return { counts, loading, error };
}

