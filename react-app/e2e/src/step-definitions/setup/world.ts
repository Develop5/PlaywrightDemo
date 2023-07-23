// All context, page, browser logic
import playwright, {
    BrowserContextOptions,
    Page,
    Browser,
    BrowserContext,
    BrowserType,
} from "playwright"

import {env} from '../../env/parseEnv'
import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber"
import { GlobalConfig, GlobalVariables } from '../../env/global'

export type Screen = {
    browser: Browser
    context: BrowserContext
    page: Page
}

export class ScenarioWorld extends World {
    constructor(options: IWorldOptions) {
        super(options)
        this.globalConfig = options.parameters as GlobalConfig
        this.globalVariables = {}
    }

    globalConfig: GlobalConfig
    globalVariables: GlobalVariables
    screen!: Screen                            // The "!" makes it optional
    async init(contextOptions?: BrowserContextOptions) : Promise<Screen> {
        await this.screen?.page?.close()
        await this.screen?.context?.close()
        await this.screen?.browser?.close()

        const browser = await this.newBrowser()            
        // We will create a custom browser that will determine a new browser
        //based on an environment variable that we will set
        // This environment variable will determine if our test will run
        //on Chromium, Firefox or web kit(Safari)

        const context = await browser.newContext(contextOptions)
        const page = await context.newPage()

        this.screen = {browser, context, page}

        return this.screen
    }

    private newBrowser = async (): Promise<Browser> => {
        const automationBrowsers = ['chromium', 'firefox', 'webkit']
        type AutomationBrowser = typeof automationBrowsers[number]
        const automationBrowser = env('UI_AUTOMATION_BROWSER') as AutomationBrowser

        const browserType: BrowserType = playwright[automationBrowser]
        const browser = await browserType.launch({
            
            devtools: process.env.DEVTOOLS !== 'false',
            // this argument devtools to "true" shows the devtools from the moment we run the test
            // this environment variable DEVTOOLS needs now to be created in common.env
            
            headless: process.env.HEADLESS != 'false',
            args: ['--disable-web-security', '--disable-features=IsolateOrigins, site-per-process'],

        })
        return browser
    }
}

setWorldConstructor(ScenarioWorld)