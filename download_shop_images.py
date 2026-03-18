import urllib.request, os

images = [
    ("https://artisticholistic.com/wp-content/uploads/2021/06/online-yoga-classes-artistic-holistic-300x300.jpg", "yoga-class.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2024/07/Red-Dragon-in-Storm-Kathleen-300x300.png", "red-dragon.png"),
    ("https://artisticholistic.com/wp-content/uploads/2021/05/FullSizeRender-8-226x300.jpg", "old-lamps.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2024/07/20200612_104034-scaled-e1722428289635-300x300.jpg", "squirrel-in-a-pot.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2024/07/IMG_E3773-300x300.jpg", "inch-abbey.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2024/07/IMG_E3724-300x300.jpg", "look-what-i-nearly-mist.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2021/06/the-wave-Commission.-SOLD-Have-your-name-in-the-wave-300x240.jpg", "the-wave.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2021/06/we20are20sailing20better20copy_edited-231x300.png", "we-are-sailing.png"),
    ("https://artisticholistic.com/wp-content/uploads/2021/06/no.27.-Mooove-over-SOLD-1-300x300.jpg", "mooove-over.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2021/06/NO.30-THE-OLD-BUILDING-61-BY-53-1-300x300.jpg", "the-old-building.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2021/06/Waterlillies-300x300.jpg", "water-lillies.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2021/05/The-Overgrown-Loney-300x300.jpeg", "the-laneway.jpg"),
]

dest = "/Users/john/IdeaProjects/artistic-holistic/public/images/shop/"
os.makedirs(dest, exist_ok=True)
headers = {"User-Agent": "Mozilla/5.0"}

for url, filename in images:
    path = os.path.join(dest, filename)
    req = urllib.request.Request(url, headers=headers)
    try:
        data = urllib.request.urlopen(req).read()
        with open(path, "wb") as f:
            f.write(data)
        print(f"OK  {filename} ({len(data)//1024}KB)")
    except Exception as e:
        print(f"ERR {filename}: {e}")

