import { Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global'
import { getElementLocator} from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world'
import { waitFor } from '../../support/wait-for-behavior'

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, expectedElementText: string){
        const {
            screen: {page},
            globalConfig,
        } = this;
        console.log(`the ${elementKey} should contain the text ${expectedElementText}`);
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)
        
        await waitFor(async() => {

            await page.pause()          // Introduced to see in PlayWright Inspector
            // how the test is paused and resume it from there
            // To try this, it is necessary to delete the line 
            // PWDEBUG=1
            // from common.env
            // Playwright Inspector will pop up and you need to click on Resume
            // Sometimes the test will fail. Randomly. Repeat it.

            const elementText = await page.textContent(elementIdentifier)
            return elementText?.includes(expectedElementText)
        })
    }
)


