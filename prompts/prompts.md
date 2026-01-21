## AI Prompt Usage Documentation

This document records all AI prompts used during the **Frontend Assessment**, along with follow-up prompts and the **manual changes** made after reviewing AI-generated outputs.

---

### 1. Design Confirmation & Understanding

**Prompt**  
I have a desktop-only Figma design for a frontend assessment.  
Please confirm the sections, layout hierarchy, and major UI components visible in the design.  
Do not assume any mobile layout yet.

**AI Output (Summary)**

- Identified major sections such as Header, Hero, Projects, Features, Testimonials, Blog, and Footer  
- Confirmed desktop-first layout and content hierarchy  

**Manual Changes**

- Re-verified spacing, text hierarchy, and section grouping directly from Figma  
- Ignored any assumptions not explicitly visible in the design  

---

### 2. Project Setup & Folder Structure

**Prompt**  
Generate a clean React + Vite project structure suitable for a UI-focused frontend assessment.

**AI Output (Summary)**

- Suggested a standard React (NextJS)
- Recommended separating components, sections, styles, and data  

**Manual Changes**

- Simplified folder structure for clarity  
- Adjusted file naming to match project requirements  
- Ensured the project runs without errors  

---

### 3. Component Scaffolding

**Prompt**  
Convert this desktop UI section into a React component using Tailwind CSS.  
Focus on layout and readability.

**AI Output (Summary)**

- Generated initial JSX structure  
- Suggested Tailwind utility classes for spacing and typography  

**Manual Changes**

- Refined class names and spacing to better match Figma  
- Removed unnecessary wrappers and utilities  
- Improved semantic structure of the JSX  

---

### 4. Mobile-First Responsiveness Decisions

**Prompt**  
Suggest a mobile-first responsive strategy for a desktop-only UI design.  
Explain layout decisions for mobile and tablet screens.

**AI Output (Summary)**

- Recommended stacking content vertically on mobile  
- Suggested grid/flex adjustments for tablet and desktop  

**Manual Changes**

- Implemented CSS Grid for project cards  
- Manually controlled element order so images appear first on mobile and second on desktop  
- Fine-tuned breakpoints based on visual balance and readability  

---

### 5. Image & Asset Handling

**Prompt**  
How should placeholder images and icons be handled for a frontend assessment where pixel-perfect assets are not required?

**AI Output (Summary)**

- Recommended using placeholders or open-source images  
- Suggested keeping image intent consistent with the design  

**Manual Changes**

- Selected appropriate placeholder images  
- Ensured image sizing and aspect ratios matched the layout  
- Added meaningful `alt` text where applicable  

---

### 6. Styling & Cleanup

**Prompt**  
Review this Tailwind-based component and suggest improvements for readability and maintainability.

**AI Output (Summary)**

- Suggested utility grouping and minor class optimizations  

**Manual Changes**

- Cleaned up Tailwind classes  
- Ensured consistent spacing and typography across sections  
- Removed unused styles and simplified markup  

---
