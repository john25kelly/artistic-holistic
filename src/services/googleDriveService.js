/**
 * Google Drive API service for dynamically fetching gallery images.
 *
 * Requires the environment variable:
 *   REACT_APP_GOOGLE_API_KEY  – a Google Cloud API key with Drive API enabled
 *
 * The root Drive folder (publicly shared) is hardcoded below.
 * All sub-folders (animals, landscapes, modern-art, seascapes) are discovered
 * automatically at runtime so adding new categories just requires creating a
 * new folder in Drive.
 */

const API_KEY       = process.env.REACT_APP_GOOGLE_API_KEY;
const ROOT_FOLDER   = '1RDwg8tKaQYee13dWYdND9qyuf9D5FIRh';
const DRIVE_FILES   = 'https://www.googleapis.com/drive/v3/files';
const FOLDER_MIME   = 'application/vnd.google-apps.folder';

/**
 * Returns a URL that serves the image directly from Google's CDN.
 * The lh3.googleusercontent.com/d/ endpoint works for any publicly-shared
 * Drive file without requiring OAuth — an API key is not needed here.
 * The Drive API v3 alt=media endpoint requires OAuth 2.0 (not just an API
 * key) when used from a browser, so it cannot be used in <img> src attributes.
 */
export function getDriveImageUrl(fileId) {
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}

/**
 * Internal helper – fetch Drive API JSON, injecting the API key.
 */
async function driveGet(params) {
  if (!API_KEY) {
    throw new Error(
      'Google API key is not configured. ' +
      'Add REACT_APP_GOOGLE_API_KEY to your .env file.'
    );
  }

  const url = `${DRIVE_FILES}?${new URLSearchParams({ ...params, key: API_KEY })}`;
  const res  = await fetch(url);

  if (!res.ok) {
    let msg = `Drive API error: ${res.status}`;
    try {
      const body = await res.json();
      if (body?.error?.message) msg = body.error.message;
    } catch (_) { /* ignore */ }
    throw new Error(msg);
  }

  return res.json();
}

/**
 * Lists the direct sub-folders of the given parent (defaults to the root gallery folder).
 * Returns [{id, name}]
 */
export async function listSubfolders(parentId = ROOT_FOLDER) {
  const data = await driveGet({
    q:        `'${parentId}' in parents and mimeType = '${FOLDER_MIME}' and trashed = false`,
    fields:   'files(id,name)',
    pageSize: '50',
    orderBy:  'name',
  });
  return data.files || [];
}

/**
 * Lists image files inside a folder.
 * Returns [{id, name, mimeType}]
 */
export async function listImagesInFolder(folderId) {
  const data = await driveGet({
    q:        `'${folderId}' in parents and trashed = false`,
    fields:   'files(id,name,mimeType)',
    pageSize: '200',
    orderBy:  'name',
  });

  const IMAGE_MIME_RE = /^image\//i;
  const IMAGE_EXT_RE  = /\.(jpe?g|png|gif|webp|bmp|svg)$/i;

  return (data.files || []).filter(
    f => IMAGE_MIME_RE.test(f.mimeType) || IMAGE_EXT_RE.test(f.name)
  );
}

