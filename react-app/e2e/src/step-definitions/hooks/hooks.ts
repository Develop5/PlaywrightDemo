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

Before(async() => {
    global.context = await global.browser.newContext();
    // Context: A context creates a new fresh incognito instance of the brower 
    //for each test. No cache no cookies, it is fresh browser
    // A browser context can contain multiple pages

    global.page = await global.context.newPage();
    // Page: Single tab or pop-up window within a browser
    // Here we will have a single page to run our automation
    // Then, you can have a single browser with multiple pages or tabs

});

After(async() => {
    await global.page.close();
    // Closes all pages
});



