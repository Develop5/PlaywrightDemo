import { 
    Page, 
    Frame 
} from "playwright";
import { 
    ElementLocator,
    GlobalConfig,
    WaitForTarget,
    WaitForTargetType
} from "../env/global";
import { envNumber } from "../env/parseEnv";
import { handleError } from "./error-helper";
import { logger } from "../logger";


export const waitFor = async <T>(
    predicate: () => T | Promise<T>,
    globalConfig: GlobalConfig,
    options?: { timeout?:number; wait?: number; target?: WaitForTarget; type?: WaitForTargetType }
): Promise<void> => {
    // 10000 because we need the error to hit waitFor before timeout set in common.env
    // That's why it was changed to a lower value
    const { timeout = 10000, wait=2000, target = '', type = 'element'  } = options || {};
 
    const sleep = (ms: number) => new Promise( resolve => setTimeout(resolve, ms));
    const startDate = new Date();
    try {
        while (new Date().getTime() - startDate.getTime() < timeout) {
            const results = await predicate();
            if(results) return
    
            await sleep(wait)
            logger.log(`Waiting ${wait}ms`);
        }
        throw new Error(`Wait time of ${timeout}ms for ${target} exceeded`);
    } catch (error) {
        handleError(globalConfig.errorsConfig, error as Error, target, type )
    }
}

export const waitForSelector = async (
    page: Page,
    elementIdentifier: ElementLocator
): Promise<boolean> => {
    try {
        await page.waitForSelector(elementIdentifier, {
            state: 'visible',
            timeout: envNumber('SELECTOR_TIMEOUT')
        })
        return true
    } catch (e) {
        return false
    }
}

export const waitForSelectorOnPage = async (
    page: Page,
    elementIdentifier: ElementLocator,
    pages: Array<Page>,
    pageIndex: number
): Promise<boolean> => {
    try {
        await pages[pageIndex].waitForSelector(elementIdentifier, {
            state: 'visible',
            timeout: envNumber('SELECTOR_TIMEOUT')
        })
        return true
    } catch (e) {
        return false
    }
}


export const waitForSelectorInIframe = async (
    elementIframe: Frame,
    elementIdentifier: ElementLocator,
): Promise<boolean> => {
    try {
        await elementIframe?.waitForSelector(elementIdentifier, {
            state: 'visible',
            timeout: envNumber('SELECTOR_TIMEOUT')
        })
        return true
    } catch (e) {
        return false
    }
}

