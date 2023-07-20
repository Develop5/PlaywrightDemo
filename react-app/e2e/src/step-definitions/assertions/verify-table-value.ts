import { DataTable, Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global'
import { getElementLocator} from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world'
import { 
    waitFor, 
    waitForSelector 
} from '../../support/wait-for-behavior'
import { logger } from '../../logger'
import { getTableData } from '../../support/html-behavior'


Then(
    /^the "([^"]*)" table should( not)? equal the following:$/,
    
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, dataTable: DataTable) {
        const {
            screen: { page },
            globalConfig,
        } = this

        
        logger.log(`the ${elementKey} table should ${negate?'not ':''}equal the following:`)

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)

        logger.log(elementIdentifier + " tbody tr")

        logger.log("\ncucumber table >>>>>>> \n", JSON.stringify(dataTable.raw()), "\n")

        await waitFor( async () => {

            const elementStable = await waitForSelector(page, elementIdentifier)

            if (elementStable) {
                const tableData = await getTableData(page, elementIdentifier)
                return tableData === JSON.stringify(dataTable.raw()) === !negate 

            } else {
                return elementStable
            }


        })
    }
)