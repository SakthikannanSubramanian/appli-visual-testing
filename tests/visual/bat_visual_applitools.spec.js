const { test } = require('@playwright/test');
const { chromium } = require('playwright');
import { BatchInfo, Configuration, EyesRunner, VisualGridRunner, BrowserType, DeviceName, ScreenOrientation, Eyes, Target, ClassicRunner } from '@applitools/eyes-playwright';
import urlsToTest from './url-processing/combined-urls-object.js';

let Runner;
let Batch;
let Config;
let browser;
let context;
let page;

test.beforeAll(async() => {

    // For future reference
    // Runner = new VisualGridRunner({ testConcurrency: 5 });
    Runner = new ClassicRunner();
    Batch = new BatchInfo({name: `BAT Visual test using Playwright and Applitools eyes-playwright`});

    Config = new Configuration();
    Config.setApiKey(process.env.APPLITOOLS_API_KEY);
    Config.setBatch(Batch);
    Config.addBrowsers(
        { name: BrowserType.CHROME, width: 800, height: 600 }, //not important here for view port as for this test we have udpated the view port below
        // below browsers are for future references 
                // { name: BrowserType.FIREFOX, width: 1600, height: 1200 },
                // { name: BrowserType.SAFARI, width: 1024, height: 768 },
                // { chromeEmulationInfo: { deviceName: DeviceName.iPhone_11, screenOrientation: ScreenOrientation.PORTRAIT} },
                // { chromeEmulationInfo: { deviceName: DeviceName.Nexus_10, screenOrientation: ScreenOrientation.LANDSCAPE} }
    );
});


test.beforeEach(async()=> {
    browser = await chromium.launch(); //this line needs Need optimisation
    context = await browser.newContext();//this line needs Need optimisation
    page = await context.newPage();//this line needs Need optimisation

    //Set cookies to avoid cookie model for bat.com
    await context.addCookies([{
        name: 'cookieMessage',
        value: '7',
        domain: '.bat.com',
        path: '/',
        expires: Math.floor(Date.now() / 1000) + 24 * 60 * 60}]
    );
})

test.describe('BAT Visual testing', () => {    
    urlsToTest.forEach(obj =>{

        const urlsToCompare = Object.values(obj);
        const eyeTitle = urlsToCompare[1].split("/").reverse()[0];

        urlsToCompare.forEach((url,index) => {
            test(`Testing - ${eyeTitle} - ${url}`, async () => {
                        try{
                            //set Eyes with Runnertype and config
                            let eyes = new Eyes(Runner, Config);

                            //set cookies to avoid cookie model for bat.com
                            await eyes.open(page, 'BAT', eyeTitle, { width: 1680, height: 1050 });
                            await page.goto(url);
                            await page.waitForTimeout(3000);
                
                            const acceptButtonStagePage = await page.$('#onetrust-accept-btn-handler');
                
                            if (acceptButtonStagePage) {
                                const buttonText = await acceptButtonStagePage.textContent();
                                    if (buttonText.includes('Accept All Cookies')) {
                                        await acceptButtonStagePage.click();
                                        await page.waitForTimeout(2000);
                                    }
                            }

                            await eyes.check(`${eyeTitle} page`, Target.window().fully().ignoreCaret(true));
                            await eyes.close();
                        }
                        catch(e){
                            console.log(e.message);
                        }
                });
            });
    });
});

test.afterEach(async()=>{
    if(page) await page.close();
    if(browser) await browser.close();
})
