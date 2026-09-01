# Digital Menu Delight

Build a premium, modern, mobile-first digital restaurant menu web app based on the attached menu PDF.

IMPORTANT:

- Use the attached PDF as the SINGLE SOURCE OF TRUTH for all menu content.

- Extract and use the exact item names, descriptions, prices, categories, and other available information from the PDF.

- Do NOT invent menu items, prices, ingredients, descriptions, or categories.

- If an image is not available in the PDF, use an elegant food placeholder rather than inventing a specific food image.

- The app should feel like a premium restaurant's digital menu, not a generic website.

PRIMARY GOAL:

Create a beautiful mobile-friendly menu where customers can quickly browse categories and tap any food item to see a much larger, visually impressive item detail view.

DESIGN DIRECTION:

- Premium restaurant aesthetic

- Modern, elegant, appetizing

- Mobile-first

- Smooth animations

- High-quality food presentation

- Clean typography

- Strong visual hierarchy

- Spacious layout

- Subtle glassmorphism where appropriate

- Soft shadows

- Rounded cards

- Premium micro-interactions

- Fast and lightweight UI

HEADER:

Create a sticky mobile header containing:

- Restaurant/logo area

- Menu title

- Search icon

- Optional language/menu controls if appropriate

- Elegant subtle shadow

- Header should remain visible while scrolling

HERO SECTION:

Create a premium hero area at the top:

- Restaurant/menu branding from the PDF if available

- Large heading: "Our Menu"

- Short supporting text based only on available PDF content

- Beautiful food-related visual treatment

- Subtle entrance animation

- Avoid excessive text

CATEGORY NAVIGATION:

Create horizontally scrollable category chips/tabs on mobile.

Examples only:

- All

- Starters

- Main Course

- Burgers

- Pizza

- Drinks

- Desserts

IMPORTANT:

Only display categories that actually exist in the attached PDF.

CATEGORY BEHAVIOR:

- Clicking a category smoothly scrolls to that section.

- Active category should be visually highlighted.

- Add smooth horizontal scrolling on mobile.

- Keep category navigation sticky below the header when useful.

MENU GRID:

Create beautiful responsive menu cards.

Each card should show:

- Food image/visual

- Exact item name from PDF

- Short description

- Price

- Optional small badge if the PDF indicates something such as bestseller, spicy, vegetarian, etc.

- Elegant hover/tap interaction

Mobile:

- Prefer a clean 1-column or optimized 2-column layout depending on content/image quality.

Tablet/Desktop:

- Use a responsive 2–4 column grid.

ITEM CLICK EXPERIENCE:

This is VERY IMPORTANT.

When a user taps/clicks a menu item:

DO NOT simply navigate to a boring new page.

Open a premium animated item detail modal / bottom sheet.

On mobile:

- Use a large bottom-sheet style detail panel.

- Smooth slide-up animation.

- Rounded top corners.

- Large food image at the top.

- Large item name.

- Large readable description.

- Price displayed prominently.

- Any available item information from the PDF.

- Close button in the top-right.

- Add subtle backdrop blur behind the modal.

On desktop:

- Use a centered premium modal/card.

- Large image on the left.

- Item information on the right.

- Smooth scale + fade animation.

ITEM DETAIL TYPOGRAPHY:

The item name should be significantly larger than the menu-card title.

Example hierarchy:

ITEM NAME

Large bold 28–36px mobile

Description

16–18px

Price

20–24px bold

Make the item detail view feel premium and visually important.

ANIMATIONS:

Add tasteful animations throughout the application:

- Hero fade/slide entrance

- Menu cards fade-up on scroll

- Category transitions

- Card hover lift

- Image subtle zoom on hover

- Item modal slide-up on mobile

- Desktop modal scale/fade

- Button micro-interactions

- Smooth scrolling

- Staggered card animations

IMPORTANT:

Animations must feel premium and smooth, NOT excessive or distracting.

FOOD IMAGE TREATMENT:

Food visuals should be highly attractive.

Use:

- Large rounded image containers

- Consistent aspect ratios

- Object-cover

- Subtle image zoom

- Soft shadows

- Gradient overlays only where needed

If the PDF contains food images, use them where possible.

If food images are not available, create visually appropriate placeholders without misrepresenting them as actual restaurant food photos.

SEARCH:

Add a functional menu search.

When user searches:

- Search item names

- Search descriptions

- Search categories

- Show matching results instantly

- Display a friendly empty state if nothing matches

BOTTOM MOBILE NAVIGATION:

Create a clean mobile bottom navigation if it improves usability.

Possible navigation:

- Menu

- Search

- Categories

Do not overcrowd it.

FLOATING ACTION:

Add an optional floating button for:

- Call restaurant

- WhatsApp

- Order now

ONLY show actions that are supported by the PDF/business information or make them easy to configure in one place.

ACCESSIBILITY:

- Proper contrast

- Readable font sizes

- Large tap targets

- Keyboard accessibility

- Visible focus states

- Semantic HTML

- Alt text for images

- Screen-reader friendly labels

PERFORMANCE:

- Mobile-first performance

- Lazy-load menu images

- Avoid unnecessarily heavy libraries

- Optimize animations

- Keep initial page load fast

- Responsive on small phones through large desktop screens

TECH STACK:

Use:

- React

- TypeScript

- Tailwind CSS

- shadcn/ui where useful

- Framer Motion for smooth animations

- Lucide icons

DATA STRUCTURE:

Keep menu content separated from UI components.

Create a clean menu data structure such as:

category

item name

description

price

image

badges

additional information

This will make it easy to update the menu later.

IMPORTANT CONTENT RULE:

The attached PDF is the source of truth.

Preserve the exact menu wording and prices from the PDF.

Do not rewrite or fabricate menu content unless necessary for UI labels.

VISUAL QUALITY:

The final result should look like a professionally designed premium restaurant menu application.

Avoid:

- Generic templates

- Plain white boring cards

- Excessive borders

- Huge unnecessary gradients

- Cluttered layouts

- Too many colors

- Excessive animations

- Tiny text

- Desktop-first design

Make it feel:

PREMIUM + MODERN + APPETIZING + FAST + MOBILE FRIENDLY.

FINAL CHECK:

Before finishing, verify:

1. Every menu item from the PDF is represented.

2. Prices match the PDF.

3. Categories match the PDF.

4. Item descriptions match the PDF.

5. Every menu card is clickable.

6. Clicking an item opens the large animated detail view.

7. Search works.

8. Category filtering works.

9. Mobile layout looks excellent.

10. Desktop layout remains polished.

11. No placeholder lorem ipsum.

12. No invented menu information.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f1c691a1-4cae-453d-a21f-4b1046053483).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
