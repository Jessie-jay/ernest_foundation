# Changelog

All notable changes to the Ernest Chianumba Foundation website.

## [October 1, 2026] - Latest Updates

### Changed

#### Button Border Radius Reduced
- **Before**: Fully rounded buttons (`border-radius: 9999px`)
- **After**: Modern rounded buttons (`border-radius: 12px`)
- **Token Updated**: `--button-radius: var(--radius-md)` instead of `var(--radius-full)`
- **Why**: Creates a more modern, professional appearance while maintaining visual softness

#### Images Updated with Authentic Foundation Photos
Replaced stock placeholder images with real foundation imagery from extracted files:

**Hero Section**:
- Main image: `01_hero_main_child.jpg` - Smiling child
- Inset image: `02_hero_inset_school_child.jpg` - Child in educational setting

**Mission Section**:
- `03_why_we_exist_child.jpg` - Children looking up with hope

**Programmes Section**:
- Education card: `02_hero_inset_school_child.jpg`
- Care & Support card: `06_how_we_work_hands.jpg` - Hands showing care
- Love in Action card: `05_abba_haven_family.jpg` - Family/community support

**Impact Section**:
- `04_vision_child_landscape.jpg` - Child in landscape setting

**CTA Section**:
- `07_donation_child.jpg` - Child representing donation impact

### Technical Details

**Files Modified**:
- `app/globals.css` - Updated button radius token
- `components/sections/HeroSection.tsx`
- `components/sections/MissionSection.tsx`
- `components/sections/ProgrammesSection.tsx`
- `components/sections/ImpactSection.tsx`
- `components/sections/CTASection.tsx`

**Images Location**:
- Source: `ernest_foundation_homepage_extracted_images/`
- Destination: `public/Images/`
- Format: JPG
- Total: 7 images

### Visual Impact

1. **More Professional Buttons**: Less pill-shaped, more modern web design standard
2. **Authentic Imagery**: Real foundation photos create genuine emotional connection
3. **Consistent Story**: Images now tell the foundation's actual story
4. **Better Context**: Each section uses contextually appropriate imagery

### Design System Compliance

All changes maintain design system consistency:
- Button dimensions unchanged (40px, 48px, 56px heights)
- Button padding consistent (24px horizontal)
- All other design tokens remain intact
- Image optimization via Next.js Image component

---

## Previous Updates

### Design System Implementation
- Created comprehensive design system with 150+ tokens
- Documented all colors, typography, spacing, and components
- Built interactive style guide page

### Logo Update
- Changed to unified "Logo + Name.jpg" image
- Applied to header and footer

### Button Padding Fix
- Rewrote Button component to use inline styles
- Fixed padding application issues
- All buttons now have proper 24px horizontal padding

---

**Current Version**: 1.0.1  
**Last Updated**: October 1, 2026  
**Development Server**: http://localhost:3000
