# Image Mapping Guide

A reference guide showing which images are used in each section of the website.

## Current Image Usage

### Hero Section (Top of Homepage)
**Location**: `components/sections/HeroSection.tsx`

**Main Image** (Large, right side):
- File: `01_hero_main_child.jpg`
- Description: Smiling child - main hero image
- Size: ~39KB
- Purpose: First impression, emotional connection

**Secondary Image** (Smaller, bottom left):
- File: `02_hero_inset_school_child.jpg`
- Description: Child in educational setting
- Size: ~8KB
- Purpose: Shows education focus

---

### Mission Section ("Every person deserves a chance")
**Location**: `components/sections/MissionSection.tsx`

**Main Image** (Left side):
- File: `03_why_we_exist_child.jpg`
- Description: Children looking up with hope
- Size: ~24KB
- Purpose: Illustrates mission and vision

---

### Programmes Section (Three cards)
**Location**: `components/sections/ProgrammesSection.tsx`

**Education & Development Card**:
- File: `02_hero_inset_school_child.jpg`
- Description: Child in school setting
- Size: ~8KB
- Purpose: Represents education programme

**Care & Support Card**:
- File: `06_how_we_work_hands.jpg`
- Description: Hands showing care
- Size: ~19KB
- Purpose: Represents care and compassion

**Love in Action Card**:
- File: `05_abba_haven_family.jpg`
- Description: Family/community support
- Size: ~22KB
- Purpose: Represents community outreach

---

### Impact Section ("A Nigeria where no one is abandoned")
**Location**: `components/sections/ImpactSection.tsx`

**Main Image** (Right side):
- File: `04_vision_child_landscape.jpg`
- Description: Child in landscape setting
- Size: ~28KB
- Purpose: Shows broader vision and impact

---

### CTA Section ("Help build what comes next")
**Location**: `components/sections/CTASection.tsx`

**Main Image** (Right side):
- File: `07_donation_child.jpg`
- Description: Child representing donation impact
- Size: ~21KB
- Purpose: Final call-to-action, emotional appeal

---

## Image Specifications

### File Format
- **Format**: JPG/JPEG
- **Quality**: Optimized for web
- **Total Size**: ~160KB for all 7 images

### Optimization
- All images use Next.js `Image` component
- Automatic lazy loading (except hero)
- Responsive sizing
- WebP conversion on supported browsers

### Best Practices
1. **Hero image** has `priority` prop for faster loading
2. All other images lazy load
3. `fill` prop used for responsive containers
4. `object-cover` ensures proper cropping

---

## File Directory Structure

```
public/
└── Images/
    ├── 01_hero_main_child.jpg              # Hero main
    ├── 02_hero_inset_school_child.jpg      # Hero inset + Education card
    ├── 03_why_we_exist_child.jpg           # Mission section
    ├── 04_vision_child_landscape.jpg       # Impact section
    ├── 05_abba_haven_family.jpg            # Community card
    ├── 06_how_we_work_hands.jpg            # Care card
    └── 07_donation_child.jpg               # CTA section
```

---

## Image Usage Summary

| Image File | Used In | Count | Purpose |
|------------|---------|-------|---------|
| 01_hero_main_child.jpg | Hero Section | 1x | Main hero image |
| 02_hero_inset_school_child.jpg | Hero Section, Education Card | 2x | Education focus |
| 03_why_we_exist_child.jpg | Mission Section | 1x | Mission statement |
| 04_vision_child_landscape.jpg | Impact Section | 1x | Vision illustration |
| 05_abba_haven_family.jpg | Love in Action Card | 1x | Community support |
| 06_how_we_work_hands.jpg | Care & Support Card | 1x | Care representation |
| 07_donation_child.jpg | CTA Section | 1x | Donation appeal |

**Total Sections**: 5  
**Total Images**: 7 (one image used twice)  
**Total Placements**: 8

---

## Adding New Images

### To add a new image:

1. Place the image in `public/Images/`
2. Use descriptive filename (e.g., `08_new_section_description.jpg`)
3. Update the relevant component:

```tsx
<Image
  src="/Images/08_new_section_description.jpg"
  alt="Descriptive alt text"
  fill
  className="object-cover"
/>
```

4. Add entry to this mapping document

### Naming Convention

Format: `##_section_description.jpg`
- `##` = Sequential number (01-99)
- `section` = Where it's used (hero, mission, etc.)
- `description` = Brief content description
- `.jpg` = File extension

---

## Image Optimization Tips

1. **Size**: Keep images under 100KB when possible
2. **Dimensions**: Minimum 1200px wide for hero images
3. **Format**: Use JPG for photos, PNG for graphics/logos
4. **Compression**: Use tools like TinyPNG before upload
5. **Alt Text**: Always provide descriptive alt text for accessibility

---

## Accessibility Notes

All images include:
- ✅ Descriptive alt text
- ✅ Proper semantic context
- ✅ Loading optimization
- ✅ Fallback handling

---

**Last Updated**: October 1, 2026  
**Maintained by**: Development Team
