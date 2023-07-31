import { APIResponse } from "playwright";

export type GlobalAPIResponseVariables = { [ key: string ]: APIResponse}
export type HostsConfig = Record<string, string>
export type JsonPayloadMappings = Record<string, string>
export type JsonPayloadName = string

export type GlobalConfig = {
    hostsConfig: HostsConfig
    jsonPayloadMappings: JsonPayloadMappings
}