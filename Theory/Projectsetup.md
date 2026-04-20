# What Happens When You Run: npm init playwright@latest

## ⚙️ Automatic Project Setup

When you run the Playwright setup command, it automatically creates a complete testing environment.

---

## 📦 Files & Folders Created

### 1. node_modules/
- Contains all installed dependencies
- Includes Playwright and related packages

---

### 2. package.json
- Project configuration file
- Contains:
  - dependencies
  - scripts (e.g., test commands)

---

### 3. package-lock.json
- Locks dependency versions
- Ensures consistent installs across machines

---

### 4. Playwright Config File

Example:
- playwright.config.ts

👉 Contains:
- test directory path  
- browser settings  
- timeout configuration  
- retries, parallel execution  

---

### 5. tests/ Folder
- Contains sample test files

Example:
tests/example.spec.ts  

👉 Helps you understand basic test structure

---

## 🌐 Browsers Installation

Playwright also installs:
- Chromium  
- Firefox  
- WebKit  

👉 No need to install browsers manually

---

## 🧠 What “Pre-setup” Actually Means

It means Playwright does everything automatically:

- Creates project structure  
- Installs dependencies  
- Configures test runner  
- Adds sample tests  
- Downloads browsers  

👉 So you can start testing immediately

---

## ▶️ After Setup (Next Step)

Run:

npx playwright test  

👉 Executes the sample test

---

## 💡 Extra Points (Important)

- You can delete sample tests and create your own  
- Config file is very important for customization  
- Supports parallel execution by default  

---

## ⚠️ Small Correction from Your Notes

❌ “pre-setup is installed”  
✅ “Playwright automatically sets up the project environment”

---

## 🧠 Interview Tip

If asked:

👉 “What happens when you run Playwright init?”

Answer:
- It sets up a complete testing framework  
- Installs dependencies  
- Creates config + sample tests  
- Downloads browsers  

👉 Ready-to-use environment with minimal setup