from PIL import Image

src = "/Users/mac/Downloads/Ernest_foundation/public/Logo/Logo 1.png"
dst = "/Users/mac/Downloads/Ernest_foundation/public/Logo/logo-transparent.png"

img = Image.open(src).convert("RGBA")
pixels = img.getdata()

# Threshold: pixels brighter than this (near-white) become transparent.
threshold = 238

new_data = []
for r, g, b, a in pixels:
    if r >= threshold and g >= threshold and b >= threshold:
        new_data.append((r, g, b, 0))
    else:
        new_data.append((r, g, b, a))

img.putdata(new_data)
img.save(dst)
print("saved", dst, img.size)
