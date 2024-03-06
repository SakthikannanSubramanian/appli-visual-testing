const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const baseUrls = [
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCL7T",
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCL9U",
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCLB2",
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCLBY",
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCLDR",
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCLEK",
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCLFF",
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCLG4",
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCLGY",
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCLHV",
  "https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCLM7"
  ];
  
  const stageUrls = [
    "https://stage.bat.com/contact-us/global-directory/angola",
    "https://stage.bat.com/contact-us/global-directory/armenia",
    "https://stage.bat.com/contact-us/global-directory/azerbaijan",
    "https://stage.bat.com/contact-us/global-directory/bahrain",
    "https://stage.bat.com/contact-us/global-directory/benin",
    "https://stage.bat.com/contact-us/global-directory/botswana",
    "https://stage.bat.com/contact-us/global-directory/burkina-faso",
    "https://stage.bat.com/contact-us/global-directory/burundi",
    "https://stage.bat.com/contact-us/global-directory/cameroon",
    "https://stage.bat.com/contact-us/global-directory/comoros",
    "https://stage.bat.com/contact-us/global-directory/cotedivoire"
  ];

  const sanitizeFileName = (url) => url.replace(/[^\w]/g, '_');

  test('example test', async ({ page }) => {
  await page.goto(baseUrls[0]);
  await page.waitForTimeout(1000);
  const fileName = stageUrls[0].split("/").reverse()[0];
  await expect(page).toHaveScreenshot(`before${fileName}.png`,{fullPage:true})

  await page.goto(stageUrls[0]);
  await page.waitForTimeout(1000);
  await expect(page).toHaveScreenshot(`before${fileName}.png`,{fullPage:true})
  });


// test('Visual Test Example', async ({ page }) => {
//   // Open the webpage
//   const browser = await chromium.launch();
//   await page.goto('https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCL7T');

//   // Capture a screenshot before interaction
//   const beforeScreenshot = await page.screenshot({path:"beforeScreenshot.png"});
  
//   // Perform some interaction (e.g., click a button or navigate)
//   // ... For demonstration purposes, let's just wait for a second
//   await page.waitForTimeout(1000);

//   await page.goto('https://stage.bat.com/contact-us/global-directory/angola');
//   // Capture a screenshot after interaction
//   const afterScreenshot = await page.screenshot({path:"afterScreenshot.png"});

//   // Perform visual comparison
//   expect(afterScreenshot).toMatchSnapshot('snapshot', {
//     threshold: 0.30,  // Adjust threshold as needed
//   });
// });

// test('Visual Test Example', async ({ page }) => {
//   // Open the webpage
//   const browser = await chromium.launch();
//   await page.goto('https://bat.com/group/sites/UK__CRHJSY.nsf/vwPagesWebLive/DO9FCL7T');

//   // Capture a screenshot before interaction
//   const beforeScreenshot = await page.screenshot({path:"beforeScreenshot.png"});
  
//   // Perform some interaction (e.g., click a button or navigate)
//   // ... For demonstration purposes, let's just wait for a second
//   await page.waitForTimeout(1000);

//   await page.goto('https://stage.bat.com/contact-us/global-directory/angola');
//   // Capture a screenshot after interaction
//   const afterScreenshot = await page.screenshot({path:"afterScreenshot.png"});

//   // Perform visual comparison
//   expect(afterScreenshot).toMatchSnapshot('visual-test-snapshot', {
//     threshold: 0.30,  // Adjust threshold as needed
//   });
// });
