Nested Menu Drawer – Design Engineer Assignment

An accessible, animated nested drawer menu built with React and TypeScript, focused on polished user experience, smooth transitions, and strong accessibility.

✅ Overview

This component provides:

Multi-level nested menu navigation

Smooth, direction-aware transitions

Back navigation with proper history tracking

Keyboard accessibility and screen reader support

Clean UI with responsive layout and hover states

Focus management and ARIA compliance

Performance-optimized animations

✅ Deliverables

✅ Fully functional React component

✅ TypeScript-based menu model

✅ Example usage with sample menu data

✅ Clean and readable folder structure

✅ Minimal documentation for setup and customization

✅ Success Criteria

✔ Smooth, direction-aware slide animations
✔ Back navigation with history
✔ Full keyboard accessibility
✔ Screen reader-friendly with ARIA roles
✔ Responsive and visually clean UI
✔ Focus states and hover interactions
✔ 60fps performance

✅ Tech Stack

You can use:

React + TypeScript

Animation: Framer Motion / React Spring

Styling: Tailwind CSS / Styled Components / CSS Modules

Accessibility: ARIA roles, keyboard events, focus trapping

✅ Folder Structure (Example)
src/
  components/
    NestedMenuDrawer/
      NestedMenuDrawer.tsx
      NestedMenuDrawer.types.ts
      animations.ts
      accessibility.ts
      styles.(css|ts)
      index.ts
  data/
    sampleMenuData.ts
  App.tsx

✅ Menu Structure (Type Model)

Each menu item contains:

id

label

Optional: children, icon, href, onSelect, disabled, ariaLabel

The top level represents the root menu.

✅ Accessibility Requirements

Focus trap inside drawer

Initial focus on first interactive element

Return focus on close

Esc to close, Enter/Space to select

ArrowUp/Down to navigate items

Backspace/ArrowLeft to go up a level

role="menu" and role="menuitem" usage

ARIA attributes for hierarchy

✅ Animations (Expectations)

Direction-aware transitions:

Forward (into submenu) → slide left

Backward (go back) → slide right

Animate only one level at a time

Use transform for GPU acceleration

Short animation duration (~200ms)

✅ Customization Options

You may support:

Custom drawer width

Left or right side slide-in

Override rendering of menu items

Optional header content

Theming via class names or CSS variables

✅ Example Usage (Conceptual)

A parent component should be able to:

Pass root menu data

Control open/close state

Customize rendering if needed

No code is shown here since requested.

✅ Testing Checklist

Open/close correctly

Enter submenu and go back

Keyboard navigation works fully

Screen reader announces levels

Focus remains inside drawer

Responsive on different screen sizes

Animations stay smooth

✅ Performance

Avoid unnecessary re-renders

Use memoization where needed

Animate only container, not each item

GPU-accelerated transforms

✅ Final Notes

This component should feel polished, accessible, and intuitive, matching modern UI standards. Focus on:

UX clarity

Code quality

Accessibility



▶️ Run the Project
✅ 1. Install dependencies
npm install


(or)

yarn install

✅ 2. Start the development server
npm run dev


(or, if using Create React App)

npm start

✅ 3. Build for production (if needed)
npm run build

✅ 4. Preview production build (optional)
npm run preview

Reusability
