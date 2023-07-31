import { Given } from '@cucumber/cucumber'
import { ScenarioWorld } from './setup/world'
import { getResponse } from '../support/rest-helper'

Given(
    /^I retrieve "([^"]*)"$/,
    async function(this: ScenarioWorld, route: string) {
        const {
            api: { request },
            globalAPIResponseVariables,
            globalConfig
        } = this

        console.log(`I retrieve ${route}`)

        const response = await request.get("https://jsonplaceholder.typicode.com/"+route)
        await getResponse(request, route, globalConfig, globalAPIResponseVariables)

        globalAPIResponseVariables.response = response

        
    }
)