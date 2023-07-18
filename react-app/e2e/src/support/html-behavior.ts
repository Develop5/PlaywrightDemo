import { Page, Frame, ElementHandle } from 'playwright'
import { ElementLocator } from '../env/global'

export const clickElement = async (
    page:Page,
    elementIdentifier: ElementLocator,
): Promise< void > => {
    await page.click(elementIdentifier)
}

export const clickElementAtIndex = async (
    page: Page,
    elementIdentifier: ElementLocator,
    elementPosition: number
): Promise< void > => {
    const element = await page.$(`${elementIdentifier}>>nth=${elementPosition}`)
    await element?.click()
}

export const inputValue = async (
    page: Page,
    elementIdentifier: ElementLocator,
    input: string,
): Promise< void > => {
    await page.focus(elementIdentifier)
    await page.fill(elementIdentifier, input)
}

export const selectValue = async (
    page: Page,
    elementIdentifier: ElementLocator,
    option: string,
): Promise< void > => {
    await page.focus(elementIdentifier);
    await page.selectOption(elementIdentifier, option)
}

export const checkElement = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise< void > => {
    await page.check(elementIdentifier);
}

export const getValue = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise< string | null > => {
    // To void flakyness, we need to wait for the element to be ready in the page
    await page.waitForSelector(elementIdentifier)
    const value = await page.$eval< string, HTMLSelectElement >(elementIdentifier, el => {
        return el.value;
    })
    return value;
}

export const uncheckElement = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise< void > => {
    await page.uncheck(elementIdentifier)
}

export const getIframeElement = async (
    page: Page,
    iframeIdentifier: ElementLocator
): Promise< Frame | undefined | null > => {
    await page.waitForSelector(iframeIdentifier)
    const elementHandle = await page.$(iframeIdentifier)
    const elementIframe = await elementHandle?.contentFrame()
    return elementIframe
}

export const inputValueOnIframe = async (
    elementIframe: Frame,
    elementIdentifier: ElementLocator,
    inputValue: string
): Promise< void > => {
    await elementIframe.fill(elementIdentifier, inputValue)
}

export const inputValeOnPage = async (
    pages: Array<Page>,
    pageIndex: number,
    elementIdentifier: ElementLocator,
    inputValue: string
): Promise< void > => {
    await pages[pageIndex].focus(elementIdentifier)
    await pages[pageIndex].fill(elementIdentifier, inputValue)
}

export const getAttributeText = async (
    page: Page,
    elementIdentifier: ElementLocator,
    attribute: string
): Promise< string | null > => {
    const attributeText = page.locator(elementIdentifier).getAttribute(attribute)
    return attributeText
}

export const scrollIntoView = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise< void > => {
    const element = page.locator(elementIdentifier)
    await element.scrollIntoViewIfNeeded()
}

export const elementChecked = async(
    page: Page,
    elementIdentifier: ElementLocator,
): Promise< boolean | null > => {
    const checked = await page.isChecked(elementIdentifier)
    return checked
}

export const getElementText = async(
    page: Page,
    elementIdentifier: ElementLocator,
): Promise< string | null > => {
    const text = await page.textContent(elementIdentifier)
    return text
}

export const elementEnabled = async(
    page: Page,
    elementIdentifier: ElementLocator,
): Promise< boolean | null > => {
    const enabled = await page.isEnabled(elementIdentifier)
    return enabled
}

export const getElementTextAtIndex = async(
    page: Page,
    elementIdentifier: ElementLocator,
    index: number 
): Promise< string | null > => {
    const textAtIndex = await page.textContent(`${elementIdentifier}>>nth=${index}`)
    return textAtIndex
}

export const getElement = async(
    page: Page,
    elementIdentifier: ElementLocator,
): Promise< ElementHandle<SVGElement|HTMLElement> | null > => {
    const element = await page.$(elementIdentifier)
    return element
}

export const getElementAtIndex = async(
    page: Page,
    elementIdentifier: ElementLocator,
    index: number,
): Promise< ElementHandle<SVGElement|HTMLElement> | null > => {
    const elementAtIndex = await page.$(`${elementIdentifier}>>nth=${index}`)
    return elementAtIndex
}


export const getElements = async(
    page: Page,
    elementIdentifier: ElementLocator,
): Promise< ElementHandle<SVGElement|HTMLElement>[] > => {
    const elements = await page.$$(elementIdentifier)
    return elements
}

export const getElementWithinIframe = async(
    elementIframe: Frame,
    elementIdentifier: ElementLocator,
): Promise< ElementHandle< SVGElement | HTMLElement > | null > => {
    const visibleOnIframeElement = await elementIframe?.$(elementIdentifier)
    return visibleOnIframeElement
}

export const getTextWithinIframeElement = async(
    elementIframe: Frame,
    elementIdentifier: ElementLocator,
): Promise< string | null > => {
    const textOnIframeEleemnt = await elementIframe?.textContent(elementIdentifier)
    return textOnIframeEleemnt
}