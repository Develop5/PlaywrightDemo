// This will be seen in the BeforeAll 
import {Before, After, ITestCaseHookParameter} from "@cucumber/cucumber";
import { ScenarioWorld } from './world'

Before(async function(this: ScenarioWorld, scenario) {
    console.log(`Running cucumber scenario ${scenario.pickle.name}`)
    const contextOptions = {
        recordVideo: {
            dir: './reports/videos/' + scenario.pickle.name,
        }
    }
    const ready = await this.init(contextOptions);

    // Context: A context creates a new fresh incognito instance of the brower 
    //for each test. No cache no cookies, it is fresh browser
    // A browser context can contain multiple pages

    // Page: Single tab or pop-up window within a browser
    // Here we will have a single page to run our automation
    // Then, you can have a single browser with multiple pages or tabs

});

After(async function(this:ScenarioWorld, scenario) {
    const {
        screen: {page, browser}
    } = this;

    const scenarioStatus = scenario.result?.status;
    if (scenarioStatus === 'FAILED') {
        await page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`
        });
    }
    await browser.close();
    return browser;
    // Closes all pages
});



