Skip Hire Selection Page
A responsive React application for selecting skips for waste management, featuring a dark/light mode toggle and detailed skip information.
Features

🚛 Interactive Skip Selection: Browse and select skips with an intuitive interface.
🌙 Dark/Light Mode: Toggle between themes with automatic system preference detection.
💳 Price Calculation: Displays prices including VAT for transparency.
ℹ️ Detailed Modal View: View comprehensive skip details in a modal.
📱 Responsive Design: Optimized for mobile, tablet, and desktop devices.
🛠️ Modular Architecture: Built with reusable components for maintainability.

File Structure
src/
├── App.jsx                   # Main application component
├── components/               # Reusable components
│   ├── Header.jsx            # Navigation, progress steps, and theme toggle
│   ├── SkipCard.jsx          # Individual skip card with key details
│   ├── SkipModal.jsx         # Modal for detailed skip information
│   ├── ThemeToggle.jsx       # Theme toggle component
│   ├── FooterInfo.jsx        # Static footer information
├── constants/                # Application constants
│   ├── skipData.js           # Skip data and configuration
│   ├── skipImages.js         # Skip image mappings
│   ├── steps.js              # Booking process steps
├── utils/                    # Utility functions
│   ├── priceUtils.js         # Price calculation with VAT
│   ├── skipUtils.js          # Skip image rendering with fallbacks

Technologies Used

React: JavaScript library for building component-based user interfaces.
Tailwind CSS: Utility-first CSS framework for rapid, responsive styling.
Lucide React: Lightweight and customizable icon toolkit.
Vite (optional): Next-generation frontend tooling for fast development.

Installation

Clone the repository:git clone https://github.com/MarioJean/skip-hire-selection-redesign.git
cd skip-hire-selection-redesign


Install dependencies:npm install


Start the development server:npm run dev



Component Documentation
App.jsx
The main application component that manages:

Global state (selected skip, dark mode, modal visibility).
Utility functions for price calculation and skip image rendering.
Composition of all child components.

Header.jsx
Contains:

Navigation buttons (Back/Continue).
Progress steps indicator for the booking process.


