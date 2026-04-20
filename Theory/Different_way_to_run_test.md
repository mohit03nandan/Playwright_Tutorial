# Running Tests in Playwright

## ▶️ Basic Command

Run all tests:

npx playwright test

👉 Executes all test files inside the `tests/` folder

---

## 📂 Run Specific Test File

npx playwright test tests/example.spec.ts

👉 Runs only that file

---

## 🎯 Run Specific Test (by name)

npx playwright test -g "test name"

👉 Example:
npx playwright test -g "login test"

---

## 🧪 Run Tests in UI Mode (Interactive)

npx playwright test --ui

👉 Opens Playwright Test Runner UI  
👉 Helps in debugging and running tests visually

---

## 🐞 Run in Debug Mode

npx playwright test --debug

👉 Opens browser with step-by-step execution  
👉 Useful for troubleshooting failures

---

## 📸 Run in Headed Mode (See browser)

npx playwright test --headed

👉 Runs tests with visible browser  
(Default is headless)

---

## ⚡ Run in Headless Mode

npx playwright test --headless

👉 Faster execution without UI

---

## 🌐 Run on Specific Browser

npx playwright test --project=chromium  
npx playwright test --project=firefox  
npx playwright test --project=webkit  

👉 Defined in playwright.config file

---

## 🔁 Run Tests in Parallel

npx playwright test --workers=4

👉 Runs tests in parallel using 4 workers  
👉 Faster execution

---

## 🔂 Retry Failed Tests

npx playwright test --retries=2

👉 Retries failed tests automatically

---

## 📊 Generate HTML Report

npx playwright show-report

👉 Opens test report in browser

---

## ⏱️ Run with Timeout

npx playwright test --timeout=60000

👉 Sets test timeout (in ms)

---

## 🧪 Run Tests by Tag

test('login test @smoke', async ({ page }) => {})

Run:
npx playwright test -g "@smoke"

👉 Useful for grouping tests

---

## 📁 Run Tests in Specific Folder

npx playwright test tests/login/

👉 Runs all tests inside that folder

---

## 💡 Important Notes

- Default test folder: `tests/`  
- Default browser: Chromium  
- Parallel execution enabled by default  

---

## ⚠️ Common Mistakes

- ❌ Wrong test name in `-g` filter  
- ❌ Forgetting quotes in test name  
- ❌ Not checking config for browser setup  

---

## 🧠 Interview Tips

- Playwright supports:
  - Parallel execution  
  - Multiple browsers  
  - Built-in reporting  

👉 Commands are flexible and powerful  

---

## 🚀 Quick Summary

| Use Case | Command |
|--------|--------|
| Run all tests | npx playwright test |
| Single file | npx playwright test file |
| Specific test | -g "name" |
| Debug | --debug |
| UI Mode | --ui |
| Browser | --project |