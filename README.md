Skip Hire Selection Page - README Overview

Project Overview
This project is a React-based web page for selecting skip sizes for waste management services. The page allows users to browse available skip sizes, view detailed information in a modal, select a skip, and toggle between light and dark themes. The design prioritizes user experience, modularity, and maintainability.
Approach and Design Decisions

1. Modular Architecture
To ensure scalability and reusability, the application was structured into distinct components, constants, and utility functions. This separation of concerns enhances maintainability and makes it easier to update or extend functionality.

Components:

Header.jsx: Manages the navigation bar, progress steps, and theme toggle. It displays the user's progress through the booking process and provides navigation controls.
SkipCard.jsx: Represents individual skip cards in the grid, displaying key information like size, price, and suitability for road placement or heavy waste.
SkipModal.jsx: A modal component that provides detailed skip information, including pricing, hire period, and additional details, with a selection option.
ThemeToggle.jsx: A reusable component for toggling between light and dark modes, improving user accessibility.
FooterInfo.jsx: Displays a static informational message about interacting with skip cards.


Constants:

skipData.js: Contains an array of skip objects with details like size, price, and hire period. Separating data allows for easy updates without modifying component logic.
skipImages.js: Maps skip sizes to image URLs, enabling centralized management of image assets.
steps.js: Defines the progress steps for the booking process, making it easy to modify the workflow.


Utilities:

priceUtils.js: Includes the calculateFinalPrice function to compute the total price with VAT, promoting code reuse across components.
skipUtils.js: Contains the getSkipImage function, which renders skip images or fallback SVG placeholders, ensuring consistent visual representation.



2. Technology Stack

React: Chosen for its component-based architecture, which aligns with the modular approach. React's state management and hooks (useState, useEffect) handle dynamic UI updates efficiently.
Lucide-React: Used for icons, providing a lightweight and customizable icon library for a polished UI.
Tailwind CSS: Utilized for styling, enabling rapid development with utility-first classes. Tailwind's responsive design utilities ensure the page is mobile-friendly.
Dark Mode: Implemented using Tailwind's dark mode variant classes, with theme detection based on system preferences and manual toggling.

3. User Experience

Responsive Design: The grid layout adapts to different screen sizes (1 column on mobile, 2 on tablets, 3 on desktops), ensuring accessibility across devices.
Interactive Elements:
Clicking a skip card opens a modal with detailed information, reducing clutter on the main page.
A clear visual indicator (green checkmark) shows the selected skip, enhancing user feedback.
Progress steps in the header provide context within the booking process.


Theme Support: Automatic dark mode detection based on system preferences, with a toggle for user control, improves accessibility and comfort.
Visual Fallbacks: If skip images are unavailable, an SVG placeholder with a gradient design ensures a consistent and professional appearance.

4. State Management

Local state (useState) manages the selected skip, modal visibility, dark mode, and modal skip data. This approach keeps the application lightweight without requiring a global state library like Redux.
The useEffect hook detects system theme preferences on mount, setting the initial theme accordingly.

5. File Structure
The project follows a clear folder structure to organize code:
src/
├── components/
│   ├── Header.jsx
│   ├── SkipCard.jsx
│   ├── SkipModal.jsx
│   ├── ThemeToggle.jsx
│   ├── FooterInfo.jsx
├── constants/
│   ├── skipData.js
│   ├── skipImages.js
│   ├── steps.js
├── utils/
│   ├── priceUtils.js
│   ├── skipUtils.js
├── App.jsx

This structure groups related files, making it intuitive to locate and modify code.
6. Maintainability and Scalability

Reusability: Components like ThemeToggle and utilities like calculateFinalPrice can be reused in other parts of the application.
Extensibility: Adding new skips requires only updating skipData.js and optionally skipImages.js. New progress steps can be added to steps.js.
Centralized Logic: Utility functions and constants reduce code duplication and simplify updates.
Clear Prop Passing: Components receive necessary props explicitly, making data flow predictable and debugging easier.
