const {test} = require('@playwright/test');

test('first playwright test', async({browser}) => {
  // what broser open ? it will open the default b that u set in config file
  // fixture - browser, page, context
  // it commonly available for all the test cases
  // need to pass fixture as parameter in test function
  // need to put down inside the curl braces
  // browser.newContext() - to create new browser context (it like a incognito mode)
  // browser.newPage() - to create new page in the browser context
  // browser.newContext({cookies}) - to create new browser context with injected cookies
  // browser.newContext({storageState}) - to create new browser context with injected local storage and session storage
  const context = await browser.newContext();
  const page =await context.newPage();
  await page.goto('https://www.google.com/');


})

// if u dont have speceial thing to inject in the browser context then you can directly use page fixture instead of browser fixture
test('second playwright test', async({page}) => {
  await page.goto('https://www.google.com/');
})

----------------

# Playwright Fixtures: browser, context, page

## 🧪 Import

const { test, expect } = require('@playwright/test');

---

## 🎯 What are Fixtures?

Fixtures are **predefined objects** provided by Playwright that help you interact with the browser.

### Common Fixtures:
- browser  
- context  
- page  

👉 They are automatically available in every test.

---

## 🧠 How to Use Fixtures

You must pass them as parameters inside `{}`:

test('test name', async ({ page }) => {
  // use page here
});

---

## 🌐 Test Using browser Fixture

test('first playwright test', async ({ browser }) => {

  // Create new browser context (like incognito mode)
  const context = await browser.newContext();

  // Create new page inside context
  const page = await context.newPage();

  // Navigate to URL
  await page.goto('https://www.google.com/');

});

---

## 🧠 Key Concepts

### 🔹 Default Browser
- Playwright uses the browser defined in `playwright.config`
- Default is usually Chromium

---

### 🔹 Browser Context

browser.newContext()

👉 Acts like:
- Incognito window  
- Isolated session  
- No shared cookies/storage  

---

### 🔹 Injecting State

browser.newContext({ storageState })
👉 Load saved login session

browser.newContext({ cookies })
👉 Start with predefined cookies

---

### 🔹 Page

context.newPage()

👉 Represents a browser tab

---

## ✅ Recommended Approach (Using page Fixture)

If you don’t need custom setup:

test('second playwright test', async ({ page }) => {
  await page.goto('https://www.google.com/');
});

👉 Playwright automatically:
- Creates context  
- Creates page  
- Handles cleanup  

---

## ⚖️ browser vs page Fixture

| Fixture | When to Use |
|--------|------------|
| browser | When you need custom context (cookies, storage, multiple users) |
| page | For simple tests (recommended) |

---

## ⚠️ Corrections from Your Notes

- ❌ "curl braces" → ✅ "curly braces {}"  
- ❌ "browser.newPage()" → ⚠️ Not correct directly  
  👉 Correct: context.newPage()  

---

## 💡 Best Practice

👉 Use `page` fixture by default  
👉 Use `browser` only when customization is needed  

---

## 🧠 Interview Tips

- Fixture = reusable test setup  
- browser → creates context  
- context → creates page  
- page → interacts with UI  

👉 Flow:
browser → context → page  

---

## 🚀 Simple Mental Model

Think like:

1. browser → entire browser  
2. context → incognito session  
3. page → tab  
