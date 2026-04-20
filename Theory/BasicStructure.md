# Playwright Basic Test Structure

## 🧪 Import Test

const { test, expect } = require('@playwright/test');

---

## ❌ Incorrect Example (Your First Test)

test('ui basic test', function(){
  // missing async
});

👉 Problem:
- Playwright actions are **asynchronous**
- Without `async`, you cannot use `await`
- Test will not work properly

---

## ✅ Correct Basic Test

test('ui basic test', async ({ page }) => {

  // Step 1: Navigate to URL
  await page.goto('https://example.com');

  // Step 2: Perform action
  await page.fill('input[name="q"]', 'Playwright');

  // Step 3: Click element
  await page.click('button[type="submit"]');

});

---

## 🧠 Key Concepts

### 1. async / await (Very Important)

- JavaScript is asynchronous
- Playwright commands take time (browser actions)

👉 So you MUST use:

async → makes function asynchronous  
await → waits for action to complete  

---

### 2. page Object

- `page` represents the browser tab
- Used to interact with UI

Examples:
- page.goto()
- page.click()
- page.fill()

---

### 3. Test Function Structure

test('test name', async ({ page }) => {
   // test steps
});

---

## ✅ Your Second Test (Fixed)

test('ui basic test 2', async ({ page }) => {

  // Step 1
  await page.goto('https://example.com');

  // Step 2
  await page.click('text=More information');

});

---

## ⚠️ Common Mistakes (From Your Notes)

- ❌ Missing async  
- ❌ Not using await  
- ❌ No page object  
- ❌ Only comments, no actual Playwright code  

---

## 💡 Important Point

Playwright already has **auto-wait**, but:

👉 You STILL need `await`  
Because:
- It ensures step-by-step execution  
- Prevents race conditions  

---

## 🧠 Interview Tip

If asked:

👉 Why async/await in Playwright?

Answer:
- Browser actions are asynchronous  
- await ensures execution completes before next step  
- Prevents flaky tests  

---

## 🚀 Clean Mental Model

Think like this:

1. Open page → await  
2. Perform action → await  
3. Verify result → await  

👉 Everything = sequential + controlled