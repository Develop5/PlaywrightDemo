import { Then } from "@cucumber/cucumber";
import { waitFor } from "../support/wait-for-behavior";
import { getElementLocator } from "../support/web-element-helper";
import { ScenarioWorld } from "./setup/world";
import { ElementKey } from "../env/global";
import { 
    getIframeElement,
    inputValueOnIframe
 } from "../support/html-behavior";

Then(
    /^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, iframeName: string, inputValue: string) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`I fill in the ${elementKey} input on the ${iframeName} iframe with ${inputValue}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)
        const iframeIdentifier = getElementLocator(page, iframeName, globalConfig)
        const elementIframe = await getIframeElement(page, iframeIdentifier)  // Fragile if slowly

        await waitFor( async () => {
            const result = await page.waitForSelector(iframeIdentifier, {
                state: 'visible'
            })

            if (result) {
                if (elementIframe) {
                    await inputValueOnIframe(elementIframe, elementIdentifier, inputValue)
                }
            }
            return result;
        })
    }
)


Then(
    /^the "([^"]*)" on the "([^"]*)" iframe should( not)? contain the text "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, iframeName: string, negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`the ${elementKey} on the ${iframeName} should ${negate?'not ':''}be displayed`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)
        const iframeIdentifier = getElementLocator(page, iframeName, globalConfig)
        const elementIframe = await getIframeElement(page, iframeIdentifier)

        await waitFor( async () => {
            const elementText = await elementIframe?.textContent(elementIdentifier)
            return elementText?.includes(expectedElementText) === !negate;
        })
    }
)