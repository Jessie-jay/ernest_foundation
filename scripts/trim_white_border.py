from PIL import Image, ImageChops

src = "/Users/mac/Downloads/Ernest_foundation/public/Images/image_12.png"
dst = "/Users/mac/Downloads/Ernest_foundation/public/Images/image_12_trimmed.png"

img = Image.open(src).convert("RGB")

# Build a background of the top-left pixel colour (the white frame) and diff.
bg = Image.new("RGB", img.size, img.getpixel((0, 0)))
diff = ImageChops.difference(img, bg)
# Add a small bias so near-white also counts as background
diff = ImageChops.add(diff, diff, 2.0, -30)
bbox = diff.getbbox()

if bbox:
    cropped = img.crop(bbox)
    cropped.save(dst)
    print("trimmed", dst, "from", img.size, "to", cropped.size)
else:
    print("no border detected")
