// This will be seen in the BeforeAll 
import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";
const {chromium} = require("playwright");

BeforeAll(async() => {
    global.browser = await chromium.launch({
        headless:false,
    })
});

AfterAll(async() => {
    await global.browser.close();
});

Before(async(scenario) => {
    // Context: A context creates a new fresh incognito instance of the brower 
    //for each test. No cache no cookies, it is fresh browser
    // A browser context can contain multiple pages

    global.context = await global.browser.newContext({
        recordVideo: {
            dir: './reports/videos/' + scenario.pickle.name,
        }
    });


    // Page: Single tab or pop-up window within a browser
    // Here we will have a single page to run our automation
    // Then, you can have a single browser with multiple pages or tabs
    global.page = await global.context.newPage();

});

After(async(scenario) => {
    const scenarioStatus = scenario.result?.status;
    if (scenarioStatus === 'FAILED') {
        await global.page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`
        });
    }
    await global.page.close();
    // Closes all pages
});



