# Playwright Assertions (Expect API)

## 🎯 What are Assertions?

Assertions are used to **verify expected behavior** in tests.

Playwright provides the `expect` API with built-in matchers.

---

## ⏱️ Assertion Timeout

- Default timeout: **5 seconds**
- Async matchers will retry until:
  - Condition is met ✅  
  - Timeout is reached ❌  

---

## 🧠 Types of Matchers

### 1. 🔄 Auto-Retry (Async Matchers)

👉 These wait automatically (very important feature)

---

### ✅ Common "toBe" Matchers

await expect(locator).toBeAttached()      // Element is present in DOM  
await expect(locator).toBeVisible()       // Element is visible  
await expect(locator).toBeHidden()        // Element is hidden  
await expect(locator).toBeEnabled()       // Element is enabled  
await expect(locator).toBeDisabled()      // Element is disabled  
await expect(locator).toBeChecked()       // Checkbox is checked  
await expect(locator).toBeEditable()      // Input is editable  
await expect(locator).toBeEmpty()         // Element has no content  
await expect(locator).toBeFocused()       // Element is focused  
await expect(locator).toBeInViewport()    // Element is in viewport  

---

### 📦 "toContain" Matchers

await expect(locator).toContainText()  
await expect(locator).toContainClass()  

---

### 📋 "toHave" Matchers

await expect(locator).toHaveText()  
await expect(locator).toHaveAttribute()  
await expect(locator).toHaveClass()  
await expect(locator).toHaveCount()  
await expect(locator).toHaveCSS()  
await expect(locator).toHaveValue()  
await expect(locator).toHaveValues()  

---

### 🌐 Page / Response Assertions

await expect(page).toHaveTitle()  
await expect(page).toHaveURL()  
await expect(page).toHaveScreenshot()  

await expect(response).toBeOK()  

---

## ⚡ Key Point

👉 These matchers:
- Automatically wait  
- Reduce flakiness  
- No need for manual waits  

---

## 2. ⚡ Non-Retrying (Generic Matchers)

👉 These do NOT wait — execute immediately

---

### 🔢 Value Matchers

expect(value).toBe()  
expect(value).toEqual()  
expect(value).toStrictEqual()  

---

### 🔍 Boolean / Null Checks

expect(value).toBeTruthy()  
expect(value).toBeFalsy()  
expect(value).toBeNull()  
expect(value).toBeUndefined()  
expect(value).toBeDefined()  

---

### 📊 Number Matchers

expect(value).toBeGreaterThan()  
expect(value).toBeLessThan()  
expect(value).toBeCloseTo()  

---

### 📦 Object / Array Matchers

expect(value).toContain()  
expect(value).toContainEqual()  
expect(value).toHaveLength()  
expect(value).toHaveProperty()  

---

### 🔤 String / Regex

expect(value).toMatch()  

---

### 💥 Error Handling

expect(fn).toThrow()  

---

## 🧩 Asymmetric Matchers

👉 Used for flexible matching

expect.any()  
expect.anything()  
expect.arrayContaining()  
expect.objectContaining()  
expect.stringContaining()  
expect.stringMatching()  

---

## 🚫 Negating Matchers

Use `.not`

await expect(locator).not.toBeVisible()  

---

## 🧪 Soft Assertions

👉 Continue test even if assertion fails

await expect.soft(locator).toBeVisible()  

---

## 💬 Custom Expect Message

expect(value, 'Custom error message').toBe(10)

👉 Helps in debugging

---

## ⚙️ Advanced Expect Features

### 🔧 expect.configure()
- Customize timeout globally

---

### 🔁 expect.poll()
- Retry custom logic

---

### 🔄 expect.toPass()
- Retry block of code until success

---

### 🧩 Custom Matchers

Use:
expect.extend()

👉 Create your own assertion logic

---

## ⚠️ Common Mistakes

- ❌ Using non-retry matcher for UI checks  
- ❌ Forgetting `await` with async matchers  
- ❌ Mixing locator with value assertions  

---

## 🧠 Interview Tips

- Async matchers = auto-retry (very important)  
- Default timeout = 5 sec  
- Locator assertions are preferred  
- Reduces flaky tests  

---

## 🚀 Simple Mental Model

👉 UI → use async matchers (await expect(locator))  
👉 Data → use generic matchers (expect(value))  
