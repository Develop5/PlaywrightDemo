import { GlobalConfig } from "../env/global"


const isLookupVariable = (input: string, lookupTrigger: string): boolean => {
    return !!(lookupTrigger && input.startsWith(lookupTrigger))
}


const getLookupVariable = (input: string, lookupTrigger: string, config: GlobalConfig): string => {
    const key = input.substring(lookupTrigger.length)       
    // "subs" instead of "substring" in the original
    
    const lookupValue = config.emailsConfig[key] ?? process.env[key]
    // It means that we will find the value in the localhost.env or the specific environment file
    // or in the general environment variable file
    

    if (!lookupValue) {
        throw Error(`Could not get ${input} lookup trigger`)
    }
    return lookupValue
}


export const parseInput = (input:string, config: GlobalConfig): string => {
    const lookupTrigger = process.env.VAR_LOOKUP_TRIGGER ?? '$.'
    return isLookupVariable(input, lookupTrigger) ? getLookupVariable(input, lookupTrigger, config): input;

}


