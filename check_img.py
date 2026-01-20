from PIL import Image
import os

files = [
    "public/about-intro.png",
    "public/footer-logo.png"
]

for f in files:
    try:
        if os.path.exists(f):
            with Image.open(f) as img:
                print(f"{f}: {img.size[0]} x {img.size[1]}")
        else:
            print(f"{f}: Not found")
    except Exception as e:
        print(f"{f}: Error {e}")
