import { Then } from "@cucumber/cucumber";
import { ScenarioWorld } from "./world";
import { waitFor } from "../../support/wait-for-behavior";
import { getElementLocator } from "../../support/web-element-helper";
import { ElementKey } from "../../env/global";
import { 
    checkElement 
} from "../../support/html-behavior";

Then(
    /^I check the "([^*]*)" radio button$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log('I check the ${elmentKey} radio button')
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {
                state: 'visible',
            })
            if (result) {
                await checkElement(page, elementIdentifier);
            }
            return result;
        })
    }
)