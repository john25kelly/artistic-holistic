import { useState, useEffect } from 'react';
import { listSubfolders, listImagesInFolder, getDriveImageUrl } from '../services/googleDriveService';
import { parseFilename } from '../utils/parseFilename';

/** Fisher-Yates shuffle – returns a new array, never mutates the original. */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Fetches every image from every Google Drive gallery folder and returns
 * a freshly-shuffled random selection of `count` items on each page mount.
 *
 * Each returned item: { id, url, title, price, sold }
 *
 * @param {number} count  How many random images to return (default 3)
 * @returns {{ images: Array, loading: boolean, error: string|null }}
 */
export function useRandomDriveImages(count = 3) {
  const [images,  setImages]  = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchAll() {
      try {
        setLoading(true);
        setError(null);

        // 1. Discover all gallery sub-folders
        const folders = await listSubfolders();

        // 2. Fetch every image in every folder (in parallel)
        const fileArrays = await Promise.all(
          folders.map(f => listImagesInFolder(f.id))
        );

        // 3. Flatten, shuffle, slice
        const all = fileArrays.flat();
        const shuffled = shuffle(all);
        const selected = shuffled.slice(0, count).map(file => {
          const { title, price, sold } = parseFilename(file.name);
          return {
            id:    file.id,
            url:   getDriveImageUrl(file.id),
            title,
            price,
            sold,
          };
        });

        if (!cancelled) setImages(selected);
      } catch (err) {
        console.error('[Drive] Failed to load random images:', err);
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchAll();
    return () => { cancelled = true; };
  }, [count]); // re-run if caller changes the requested count

  return { images, loading, error };
}


