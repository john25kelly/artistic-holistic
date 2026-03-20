/**
 * Parses a Google Drive image filename into gallery item metadata.
 *
 * Expected filename format:
 *   <Tile Title>-<price>.<ext>
 *
 * Examples
 * ─────────────────────────────────────────────────────────────
 *  "The Heron-300.jpg"                 → title: "The Heron"               price: "300"  sold: false
 *  "The Heron (Sold - Repeatable)-300.jpg" → title: "The Heron (Sold - Repeatable)"  price: "300"  sold: true
 *  "Sunset.jpg"                        → title: "Sunset"                  price: null   sold: false
 *  "My Painting-99.50.png"             → title: "My Painting"             price: "99.50" sold: false
 *
 * Rules
 * ─────────────────────────────────────────────────────────────
 *  • Strip the file extension first.
 *  • The price is the numeric token that follows the LAST "-" in the name.
 *    Using a greedy regex guarantees dashes inside the title (e.g. "Sold - Repeatable")
 *    are not mistaken for the price separator.
 *  • If no trailing -NUMBER pattern is found, price = null (displayed as £TBC).
 *  • If the title contains the word "sold" (case-insensitive) the item is
 *    flagged as sold and an overlay badge is rendered on the image.
 */

export function parseFilename(filename) {
  // 1. Remove the file extension
  const withoutExt = filename.replace(/\.[^.]+$/, '');

  // 2. Greedily match everything before the LAST "-<digits>" to correctly
  //    handle filenames like "The Heron (Sold - Repeatable)-300"
  const priceMatch = withoutExt.match(/^(.*)-(\d+(?:\.\d+)?)$/);

  let title, price;

  if (priceMatch) {
    title = priceMatch[1].trim();
    price = priceMatch[2];         // e.g. "300" or "99.50"
  } else {
    title = withoutExt.trim();
    price = null;
  }

  // 3. Mark as sold if the word "sold" appears anywhere in the title
  const sold = /\bsold\b/i.test(title);

  return { title, price, sold };
}

