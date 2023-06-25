import { Given } from '@cucumber/cucumber'
import { PageId } from '../env/global'
import { 
    navigateToPage,
    currentPathMatchesPageId,
} from '../support/navigation-behavior';
import { ScenarioWorld } from './setup/world';
import { waitFor } from '../support/wait-for-behavior';

Given(
    /^I am on the "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId){
        const {
            screen: {page},
            globalVariables,
            globalConfig,
        } = this;
        console.log(`I am on the ${pageId} page`);

        globalVariables.currentScreen = pageId;
        
        await page.goto("http://localhost:3000/");
        await navigateToPage(page, pageId, globalConfig)
        await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig))
    }
)
