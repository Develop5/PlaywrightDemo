import { Then } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { waitFor } from "../support/wait-for-behavior";
import { ElementLocator } from "../env/global";
import { ElementKey } from "../env/global";
import { getElementLocator } from "../support/web-element-helper";
import {
    inputValeOnPage
} from "../support/html-behavior";



Then(
    /^I fill in the "([^"]*)" input on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) with "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, inputValue: string ) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;
        console.log(`I fill in the ${elementKey} input on the ${elementPosition} window|tab with ${inputValue}`)
        const pageIndex = Number(elementPosition.match(/\d/d)?.join('')) -1
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)

        await waitFor(async() => {
            let pages = context.pages();
            const result = await pages[pageIndex].waitForSelector(elementIdentifier, {
                state: 'visible'
            })
            if (result) {
                await inputValeOnPage(pages, pageIndex, elementIdentifier, inputValue)
            }
            return result
        })
    }
)