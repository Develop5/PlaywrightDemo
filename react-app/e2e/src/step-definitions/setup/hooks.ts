import {Before, After, ITestCaseHookParameter, setDefaultTimeout} from "@cucumber/cucumber";
import { ScenarioWorld } from './world';
import { env, envNumber } from '../../env/parseEnv';

setDefaultTimeout(envNumber('SCRIPT_TIMEOUT'));

Before(async function(this: ScenarioWorld, scenario) {
    const automationBrowser = env('UI_AUTOMATION_BROWSER')

    console.log(`Running cucumber scenario ${scenario.pickle.name}`)
    const contextOptions = {
        recordVideo: {
            dir: `${env('VIDEO_PATH')}${scenario.pickle.name}`,
        }
    }
    const ready = await this.init(contextOptions);
    return ready
});

After(async function(this:ScenarioWorld, scenario) {
    console.log(`Closing cucumber scenario ${scenario.pickle.name}`)
      const {
          screen: {page, browser}
      } = this;
      const scenarioStatus = scenario.result?.status;
      if (scenarioStatus === 'FAILED') {
          const screenshot = await page.screenshot({
              path: `${env('SCREENSHOT_PATH')}${scenario.pickle.name}.png`
          });
          await this.attach(screenshot, 'image/png')
      }
      await browser.close();
    return browser;
});



