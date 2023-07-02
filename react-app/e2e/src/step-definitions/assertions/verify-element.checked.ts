import { Then } from "@cucumber/cucumber";
import { waitFor } from "../../support/wait-for-behavior";
import { ScenarioWorld } from "../setup/world";
import { getElementLocator } from "../../support/web-element-helper";
import { ElementKey } from "../../env/global";

Then(
    /^the "([^"]*)" radio button should be checked$/,
    async function (this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} radio button should be checked`)

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)

        await waitFor(async () => {
            const isElementChecked = await page.isChecked(elementIdentifier)
            return isElementChecked
        })
        
    }
)