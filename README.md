# Skip Hire Selection Page

A responsive React application for selecting skips for waste management, featuring a dark/light mode toggle and detailed skip information.

## Features
- 🚛 **Interactive Skip Selection**: Browse and select skips with an intuitive interface.
- 🌙 **Dark/Light Mode**: Toggle between themes with automatic system preference detection.
- 💳 **Price Calculation**: Displays prices including VAT for transparency.
- ℹ️ **Detailed Modal View**: View comprehensive skip details in a modal.
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- 🛠️ **Modular Architecture**: Built with reusable components for maintainability.

## File Structure
```
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
```

## Technologies Used
- **React**: JavaScript library for building component-based user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive styling.
- **Lucide React**: Lightweight and customizable icon toolkit.
- **Vite** (optional): Next-generation frontend tooling for fast development.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MarioJean/skip-hire-selection-redesign.git
   cd skip-hire-selection-redesign
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Component Documentation

### App.jsx
The main application component that manages:
- Global state (selected skip, dark mode, modal visibility).
- Utility functions for price calculation and skip image rendering.
- Composition of all child components.

### Header.jsx
Contains:
- Navigation buttons (Back/Continue).
- Progress steps indicator for the booking process.
- Theme toggle button for switching between light and dark modes.

### SkipCard.jsx
Displays:
- Skip image or SVG placeholder.
- Basic skip information (size, price).
- Indicators for road placement and heavy waste suitability.
- Selection button to trigger the modal.

### SkipModal.jsx
Shows detailed skip information, including:
- Larger skip visualization.
- Full pricing breakdown with VAT.
- Detailed feature indicators (e.g., hire period, suitability).
- Selection confirmation button.

### ThemeToggle.jsx
A reusable component for toggling between light and dark modes, with system preference detection.

### FooterInfo.jsx
Displays static information about interacting with skip cards.

## Approach and Design Decisions
- **Modular Architecture**: Components, constants, and utilities are separated for scalability and maintainability.
- **Responsive Design**: Grid layout adapts to different screen sizes (1 column on mobile, 2 on tablets, 3 on desktops).
- **State Management**: Uses `useState` and `useEffect` for lightweight, local state management.
- **Visual Fallbacks**: SVG placeholders with gradient designs ensure a professional appearance if images are unavailable.
- **Extensibility**: Adding new skips or steps requires only updates to `skipData.js`, `skipImages.js`, or `steps.js`.

## Usage
- Browse skip cards in the grid to view available options.
- Click a card to open a modal with detailed information.
- Select a skip to proceed with the booking process.
- Toggle between light and dark modes using the theme toggle button.
- Navigate through the booking process using the header's progress steps.
