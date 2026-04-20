# Playwright Installation Setup

## 🧩 Prerequisites

### 1. Install Node.js
- Download and install Node.js from the official website
- This also installs npm (Node Package Manager)

---

### 2. Verify Installation

Run the following commands in terminal:

node -v  
npm -v  

👉 Ensures Node.js and npm are installed correctly

---

### 3. Install a Code Editor

Recommended:
- :contentReference[oaicite:0]{index=0}  

👉 Lightweight and best support for Playwright

---

## 🚀 Install Playwright

### 4. Initialize Playwright Project

Run:

npm init playwright@latest  

👉 This will:
- Create a new project
- Install Playwright dependencies
- Set up example tests
- Install browsers (Chromium, Firefox, WebKit)

---

## ⚙️ What Happens During Installation?

Playwright setup will:
- Install required packages
- Ask configuration questions (language, test folder, etc.)
- Download browsers automatically

---

## 📁 Project Structure (After Installation)

Example:

tests/
playwright.config.ts
package.json

---

## ▶️ Run Your First Test

Run:

npx playwright test  

👉 Executes all test cases

---

## 💡 Important Notes (Added)

- No need to install browsers manually → Playwright handles it  
- Supports TypeScript by default  
- You can re-run tests in UI mode:

npx playwright test --ui  

---

## ⚠️ Common Mistakes (Your correction)

❌ npm inti playwright  
✅ npm init playwright@latest  

---

## 🧠 Interview Tip

- Playwright setup is quick because it includes:
  - Test runner  
  - Browser installation  
  - Config setup  

👉 Unlike older tools, minimal manual setup required