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
