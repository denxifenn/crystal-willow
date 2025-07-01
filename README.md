# 🔮 Crystal Willow

**Crystal Willow** is a web-based catalogue of healing crystals, beautifully designed with pixel aesthetics. Users can browse crystals by spiritual purpose, zodiac sign, and birth month. Each crystal card provides details such as uses, benefits, cleansing methods, and fun facts.

---

## 🌟 Features

- Flip-card interface for each crystal
- Organized by:
  - Spiritual purpose (e.g. Protection, Love, Healing)
  - Zodiac signs
  - Birth months
- Visual-rich interface with pixel art style
- Works as both a website and an Electron-based desktop app


---

## 🚀 How to Run

### Option 1: Run as Website

1. Clone or download the repository
2. Open `index.html` in any browser

### Option 2: Run as Desktop App (Electron)

## 🧠 How to Run Crystal Willow as a Desktop App

To run Crystal Willow locally as a desktop app using [Electron.js](https://www.electronjs.org/), follow the steps below:

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Git](https://git-scm.com/) (optional, for cloning)
- Basic terminal knowledge

---

### 🛠️ Installation

1. **Clone the repository** or download the zip and extract:
   ```bash
   git clone https://github.com/denxifenn/crystal-willow.git
   cd crystal-willow
2. Install dependencies (if you dont have it already)
    -type "npm install" in terminal
---
Make sure your folder contains the following:

crystal-willow/
├── main.js
├── package.json
├── index.html
├── assets/
└── ...
📝 package.json 
Ensure your package.json includes the following:

json
{
  "name": "crystal-willow",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "devDependencies": {
    "electron": "^27.0.0"
  }
}


If you don’t have Electron installed, run:

npm install --save-dev electron


3. Run
    -type "npm start"
   
If npm start doesn't work, try:
npx electron .
---

## 💻 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Desktop App:** [Electron.js](https://www.electronjs.org/)
- **Design Tools:** Figma, Pixel Art

---

## 📁 Folder Structure
![image](https://github.com/user-attachments/assets/5702a827-9e46-4fec-b172-c0c6ee9fa124)


⚠️ Disclaimer
Crystal healing is a spiritual tool and not a replacement for professional medical advice
