import urllib.request, re

pages = {
    'home': 'https://artisticholistic.com/',
    'fine-art-classes': 'https://artisticholistic.com/fine-art-classes/',
    'yoga-classes': 'https://artisticholistic.com/yoga-classes/',
    'reiki-healing': 'https://artisticholistic.com/reiki-healing/',
    'contact': 'https://artisticholistic.com/contact/',
    'shop': 'https://artisticholistic.com/shop/',
    'gallery': 'https://artisticholistic.com/gallery/',
}

for name, url in pages.items():
    print(f'\n{"="*60}')
    print(f'PAGE: {name}')
    print('='*60)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    text = re.sub(r'<script.*?</script>', '', html, flags=re.DOTALL)
    text = re.sub(r'<style.*?</style>', '', text, flags=re.DOTALL)
    text = re.sub(r'<[^>]+>', ' ', text)
    for ent, rep in [('&amp;','&'),('&nbsp;',' '),('&#8211;','-'),('&#8217;',"'"),
                     ('&pound;','£'),('&#8220;','"'),('&#8221;','"'),('&#8216;',"'"),('&#8212;','-')]:
        text = text.replace(ent, rep)
    lines = [l.strip() for l in text.splitlines() if l.strip() and len(l.strip()) > 5]
    for line in lines[:80]:
        print(line)

