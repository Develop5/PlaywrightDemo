import { APIResponse } from "playwright";

export type GlobalAPIResponseVariables = { [ key: string ]: APIResponse}
export type HostsConfig = Record<string, string>

export type GlobalConfig = {
    hostsConfig: HostsConfig
}