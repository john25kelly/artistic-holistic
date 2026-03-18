import urllib.request, re, os, json

headers = {"User-Agent": "Mozilla/5.0"}

pages = [
    ("landscapes",  "https://artisticholistic.com/gallery/landscapes/"),
    ("seascapes",   "https://artisticholistic.com/gallery/seascapes/"),
    ("modern-art",  "https://artisticholistic.com/gallery/modern-art/"),
    ("animals",     "https://artisticholistic.com/gallery/animals/"),
]

for slug, url in pages:
    print(f"\n{'='*60}")
    print(f"CATEGORY: {slug}  ({url})")
    print('='*60)
    req = urllib.request.Request(url, headers=headers)
    try:
        html = urllib.request.urlopen(req).read().decode("utf-8", errors="ignore")
    except Exception as e:
        print(f"ERROR fetching: {e}")
        continue

    # Save raw HTML for inspection
    with open(f"/tmp/gallery_{slug}.html", "w") as f:
        f.write(html)

    # Try to find gallery images - look for img tags with title/alt
    imgs = re.findall(r'<img[^>]+>', html, re.IGNORECASE)
    for img in imgs:
        src  = re.search(r'src=["\']([^"\']+)["\']', img)
        alt  = re.search(r'alt=["\']([^"\']*)["\']', img)
        titl = re.search(r'title=["\']([^"\']*)["\']', img)
        if src and src.group(1) and "wp-content/uploads" in src.group(1):
            print(f"  SRC:   {src.group(1)}")
            if alt and alt.group(1):
                print(f"  ALT:   {alt.group(1)}")
            if titl and titl.group(1):
                print(f"  TITLE: {titl.group(1)}")
            print()

