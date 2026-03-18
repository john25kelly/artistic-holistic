import urllib.request, os

BASE = "https://artisticholistic.com/wp-content/uploads/"
headers = {"User-Agent": "Mozilla/5.0"}

gallery_images = {
    "landscapes": [
        (BASE + "2021/06/FullSizeRender-1.jpg",              "saul.jpg"),
        (BASE + "2021/06/20160601_100955-1-scaled.jpg",      "countryside.jpg"),
        (BASE + "2021/06/NO.30-THE-OLD-BUILDING-61-BY-53-2.jpg", "the-old-building.jpg"),
        (BASE + "2021/06/20210511_113553-scaled.jpg",        "country-path.jpg"),
        (BASE + "2021/06/The-Overgrown-Loney-2.jpeg",        "the-overgrown-loney.jpg"),
        (BASE + "2021/06/IMG_2060-2.jpg",                    "landscape-6.jpg"),
        (BASE + "2021/06/IMG_2059-2.jpg",                    "landscape-7.jpg"),
        (BASE + "2021/06/IMG_0973-rotated.jpg",              "landscape-8.jpg"),
        (BASE + "2021/06/Swan-in-a-Frozen-Sea.jpeg",         "swan-in-frozen-sea.jpg"),
        (BASE + "2021/06/The-Hidden-House.jpg",              "the-hidden-house.jpg"),
        (BASE + "2021/06/Trees.jpg",                         "trees.jpg"),
        (BASE + "2021/05/WATERLILIS-..jpg",                  "waterlillies.jpg"),
        (BASE + "2021/06/the-quiet-Lagan-SOLD.jpg",          "the-quiet-lagan.jpg"),
        (BASE + "2021/06/Poppy.jpg",                         "poppy.jpg"),
    ],
    "seascapes": [
        (BASE + "2021/06/me-1.jpg",                          "seascape-me.jpg"),
        (BASE + "2021/06/No.-58-Sunset-over-Dorneill-Island-Killyleagh-Strangford-Lough.-Watercolour-painting-size-26-by-38-60-unframed.-.jpg", "sunset-dorneill.jpg"),
        (BASE + "2021/06/No-scaled.jpg",                     "seascape-no.jpg"),
        (BASE + "2021/06/killyleagh_edited-scaled.jpg",      "killyleagh.jpg"),
        (BASE + "2021/06/No15-1.jpg",                        "no-15.jpg"),
        (BASE + "2021/06/No-1.jpg",                          "seascape-no-1.jpg"),
        (BASE + "2021/06/the-wave-Commission.-SOLD-Have-your-name-in-the-wave.jpg", "the-wave.jpg"),
        (BASE + "2021/06/we20are20sailing20better20copy_edited.png", "we-are-sailing.png"),
        (BASE + "2021/06/20190421_092548-1.jpg",             "seascape-study.jpg"),
        (BASE + "2021/06/The-Town-Rock-Strangford-lough-Killyleagh-SOLD.jpg", "town-rock.jpg"),
        (BASE + "2021/06/WHITE-ROCKS-.-cHILDREN-ON-THE-BEACH.-SOLD-scaled.jpg", "white-rocks.jpg"),
    ],
    "modern-art": [
        (BASE + "2021/05/Modern20Goliath20Cranes20_edited.jpg", "goliath-cranes.jpg"),
        (BASE + "2021/06/Modern-Art-1.png",                  "modern-art-1.png"),
        (BASE + "2021/06/Modern-Art-2.png",                  "modern-art-2.png"),
        (BASE + "2021/06/abstract-SOLD-Acrylic-1.jpg",       "abstract-sold.jpg"),
        (BASE + "2021/05/Acrylic-boats.jpg",                 "acrylic-boats.jpg"),
        (BASE + "2021/06/abstract-2.jpg",                    "abstract-2.jpg"),
        (BASE + "2021/06/abstract-2-2.jpg",                  "abstract-3.jpg"),
    ],
    "animals": [
        (BASE + "2021/05/Fine-Art-Moove-Artistic-Holistic.jpg", "moove.jpg"),
        (BASE + "2021/06/The-Heron-SOLD-but-repeatable-1-rotated.jpg", "the-heron.jpg"),
        (BASE + "2021/06/No-2.jpg",                          "animals-3.jpg"),
        (BASE + "2021/06/20210607_210301.jpg",               "animals-4.jpg"),
    ],
}

dest_base = "/Users/john/IdeaProjects/artistic-holistic/public/images/gallery/"

for category, images in gallery_images.items():
    dest = os.path.join(dest_base, category)
    os.makedirs(dest, exist_ok=True)
    for url, filename in images:
        path = os.path.join(dest, filename)
        req = urllib.request.Request(url, headers=headers)
        try:
            data = urllib.request.urlopen(req).read()
            with open(path, "wb") as f:
                f.write(data)
            print(f"OK  {category}/{filename} ({len(data)//1024}KB)")
        except Exception as e:
            print(f"ERR {category}/{filename}: {e}")

