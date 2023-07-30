import { Before, ITestCaseHookParameter } from "@cucumber/cucumber";
import { ScenarioWorld } from "./world";

Before(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
    console.log(`Running cucumber scenario ${scenario.pickle.name}`)

    const ready = await this.init()
    return ready
})