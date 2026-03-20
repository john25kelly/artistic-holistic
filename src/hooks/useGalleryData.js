import { useState, useEffect } from 'react';
import { listSubfolders, listImagesInFolder, getDriveImageUrl } from '../services/googleDriveService';
import { parseFilename } from '../utils/parseFilename';

/**
 * Converts a Drive folder name (e.g. "Modern Art") to the URL slug
 * used by React Router (e.g. "modern-art").
 */
function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Fetches the list of gallery items for a single category from Google Drive.
 *
 * @param {string} categorySlug  e.g. "animals", "landscapes", "modern-art"
 * @returns {{ items, loading, error }}
 */
export function useGalleryData(categorySlug) {
  const [items,   setItems]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!categorySlug) return;

    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        // 1. Discover all sub-folders of the root Drive gallery folder
        const folders = await listSubfolders();

        // 2. Match by slug (case-insensitive, spaces → hyphens)
        const folder = folders.find(f => toSlug(f.name) === categorySlug);
        if (!folder) {
          throw new Error(
            `Folder "${categorySlug}" was not found in the Drive gallery. ` +
            `Available folders: ${folders.map(f => f.name).join(', ')}`
          );
        }

        // 3. Fetch image files from the matched folder
        const files = await listImagesInFolder(folder.id);

        // 4. Parse each filename into gallery item data
        const parsed = files.map((file, idx) => {
          const { title, price, sold } = parseFilename(file.name);
          return {
            id:    idx + 1,
            title,
            price: price || null,          // null → displayed as £TBC
            sold,
            image: getDriveImageUrl(file.id),
            fileId: file.id,
          };
        });

        console.log('[Gallery] items parsed:', parsed.length, parsed[0] ? { title: parsed[0].title, image: parsed[0].image } : 'none');
        if (!cancelled) setItems(parsed);
      } catch (err) {
        console.error('[Gallery] fetch error:', err.message);
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => { cancelled = true; };
  }, [categorySlug]);

  return { items, loading, error };
}

