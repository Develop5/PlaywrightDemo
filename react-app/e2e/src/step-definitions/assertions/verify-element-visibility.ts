import { Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global'
import { getElementLocator} from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world'
import { waitFor } from '../../support/wait-for-behavior'
import { ElementType } from 'react'



Then(
    /^the "([^"]*)" should( not)? be displayed$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
        const {
            screen: {page},
            globalConfig,
        } = this;
        console.log(`the ${elementKey} should ${negate?'not ':''} be displayed`)
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)
        const locator = page.locator(elementIdentifier)
        await waitFor(async () => {
            const isElementVisible = (await page.$(elementIdentifier)) != null
            return isElementVisible === !negate;
        })
    }
)

Then(
    /^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? be displayed$/,
    async function(this: ScenarioWorld, elementPosition: string, elementKey: ElementKey, negate: boolean) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementPosition} ${elementKey} shoul ${negate?' not':''}be displayed`)

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)
        const index = Number(elementPosition.match(/\d/g)?.join('')) -1;

        await waitFor( async () => {
            const isElementVisible = (await page.$(`${elementIdentifier}>>nth=${index}`)) != null
            return isElementVisible === !negate
        })
    }
)
