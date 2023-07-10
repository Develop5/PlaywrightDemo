import { DataTable, Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global'
import { getElementLocator} from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world'
import { waitFor } from '../../support/wait-for-behavior'


Then(
    /^the "([^"]*)" table should( not)? equal the following:$/,
    
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, dataTable: DataTable) {
        const {
            screen: { page },
            globalConfig,
        } = this

        
        console.log(`the ${elementKey} table should ${negate?'not ':''}equal the following:`)

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)

        console.log(elementIdentifier + " tbody tr")

        console.log("\ncucumber table >>>>>>> \n", JSON.stringify(dataTable.raw()), "\n")

        await waitFor( async () => {

            const dataBefore = await page.$$eval(elementIdentifier+" tbody tr", (rows) => {
                return rows.map(row => {
                    const cells = row.querySelectorAll('td')
                    return Array.from(cells).map(cell => cell.textContent)
                })
            })
            // If the browser is not quick enough (e.g. production), the data cannot be retrieved
            // Therefore it must go inside the waitFor cycle, to retry until timeout is exceeded
    
            console.log("\nhtml table >>>>>>> \n", JSON.stringify(dataBefore), "\n")
            return JSON.stringify(dataBefore) === JSON.stringify(dataTable.raw()) === !negate
        })
    }
)