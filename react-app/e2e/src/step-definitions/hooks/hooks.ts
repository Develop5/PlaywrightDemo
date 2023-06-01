// This will be seen in the BeforeAll 
import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";
const {chromium} = require ("playwright");

BeforeAll(async() => {
    global.browser = await chromium.launch({
        headless:false,
    })
});

AfterAll(async() => {
    global.browser = await chromium.close();
});

Before(async() => {
    global.context = await global.browser.newContext();
    global.page = await global.context.NewPage();

});

After(async() => {
    global.page.close();
});



