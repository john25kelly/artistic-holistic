import urllib.request, os

headers = {"User-Agent": "Mozilla/5.0"}
dest = "/Users/john/IdeaProjects/artistic-holistic/public/images/home/"
os.makedirs(dest, exist_ok=True)

files = [
    ("https://artisticholistic.com/wp-content/uploads/2021/05/WATERLILIS-..jpg",                        "bg-artistic.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2021/05/yoga-classes-patricia-mccormick.jpg",     "bg-holistic.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2021/06/fine-art-painting-downpatrick-killyleagh-5.jpg", "strip-1.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2021/06/fine-art-and-yoga-downpatrick-killyleagh.jpg",   "strip-2.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2021/06/fine-art-painting-downpatrick-killyleagh-6.jpg", "strip-3.jpg"),
    ("https://artisticholistic.com/wp-content/uploads/2024/07/20230613_112748.mp4",  "video-1.mp4"),
    ("https://artisticholistic.com/wp-content/uploads/2024/07/IMG_3553.mov",         "video-2.mp4"),
]

for url, filename in files:
    path = os.path.join(dest, filename)
    req = urllib.request.Request(url, headers=headers)
    try:
        data = urllib.request.urlopen(req).read()
        with open(path, "wb") as f:
            f.write(data)
        print(f"OK  {filename}  ({len(data)//1024}KB)")
    except Exception as e:
        print(f"ERR {filename}: {e}")

