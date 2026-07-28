# EnglishO Platform

## 📚 About
**EnglishO** is an interactive, gamified English learning platform designed to help users master vocabulary, pronunciation, and reading comprehension. With a modern, component-based user interface, animated transitions, and AI-driven insights, it provides a seamless and engaging experience for learners of all ages.

## 🎯 Features
- **🔍 AI Dictionary Search:** Search for words to get instant meanings, example sentences, and phonetic breakdowns.
- **🎮 Gamified Quizzes:** Dynamic, image-based quizzes with active recall, streaks, and randomized answer layouts.
- **🃏 Visual Alphabet Flashcards:** Interactive 3D flashcards featuring randomized A-Z learning to build foundational vocabulary.
- **🎤 Speech & Text Analysis:** Integrated tools for reading comprehension and speaking practice.
- **📊 Session & Progress Tracking:** Tracks daily streaks and XP through local session management.
- **🌟 Premium UI/UX:** Built with a cohesive design system, glassmorphism elements, CSS grids, and smooth micro-animations.
- **📱 Responsive Layout:** Works seamlessly across desktops, tablets, and mobile devices.

## 🚀 How to Run Locally

This project uses **Parcel** as its web application bundler to manage assets, components, and modular JavaScript.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rithesh0115/Englisho.io.git
   cd Englisho.io
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development Server
To start the local development server, run:
```bash
npm start
```
*This will spin up a local server (usually at `http://localhost:1234`). Parcel will automatically bundle your files and refresh the page when you make changes.*

### Production Build
To create a minimized, production-ready build of the application:
```bash
npm run build
```
*This will output the optimized files into the `dist/` folder, ready for deployment.*

## 🛠️ Technologies Used
- **Core:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **Bundler:** Parcel (v2)
- **Architecture:** Component-based UI (Reusable Navbar/Footer modules)
- **Data:** JSON-driven curriculum and Base64 SVG inline assets
- **Styling:** Custom CSS variables (Design Tokens), Flexbox, CSS Grid

## 📂 File Structure
```
Englisho.io/
├── src/
│   ├── assets/             # Global icons and images
│   ├── data/               # curriculum.json and images.js (SVGs)
│   ├── pages/              # Categorized HTML views
│   │   ├── auth/           # Sign-in, sign-up, child registration
│   │   ├── core/           # Dictionary and role selection
│   │   ├── features/       # Quizzes, flashcards, dashboard, speech, text
│   │   └── info/           # About, contact, services
│   ├── scripts/            # Modular JavaScript
│   │   ├── components/     # Reusable UI modules (Navbar.js, Footer.js)
│   │   ├── pages/          # Page-specific logic scripts
│   │   ├── services/       # Core business logic (GamificationService.js, etc.)
│   │   └── utils/          # Helper utilities
│   ├── styles/             
│   │   └── global.css      # Design system and global styles
│   └── index.html          # Main landing page
├── .gitignore              # Ignored generated folders (node_modules, dist, etc.)
├── package.json            # NPM dependencies and scripts
└── README.md               # Documentation
```

## 🤝 Contributing
Contributions are welcome! If you’d like to improve this project:
1. **Fork the Repository**
2. **Create a New Branch**: `git checkout -b feature-branch`
3. **Make Your Changes & Commit**: `git commit -m "feat: adding new feature"`
4. **Push to Your Fork**: `git push origin feature-branch`
5. **Create a Pull Request**

---
🚀 **Master English with AI Intelligence on EnglishO!** 🚀
