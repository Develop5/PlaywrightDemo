import dotenv from 'dotenv'
import { env, getJsonFromFile } from './env/parseEnv'
import { generateCucumberRuntimeTag } from './support/tag-helper';
import {
    GlobalConfig,
    HostsConfig,
    PagesConfig,
    EmailsConfig,
    ErrorsConfig,
    MocksConfig,
    PageElementMappings,
    MockPayloadMappings,
} from './env/global'

import * as fs from "fs";

const environment = env('NODE_ENV')

dotenv.config({path: env('COMMON_CONFIG_FILE')})
dotenv.config({path: `${env('ENV_PATH')}${environment}.env`})

const hostsConfig: HostsConfig = getJsonFromFile(env('HOST_URLS_PATH'))
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGE_URLS_PATH'))
const emailsConfig: EmailsConfig = getJsonFromFile(env('EMAILS_URL_PATH'))
const errorsConfig: ErrorsConfig = getJsonFromFile(env('ERRORS_URLS_PATH'))
const mocksConfig: MocksConfig = getJsonFromFile(env('MOCKS_URLS_PATH'))

const mappingFiles = fs.readdirSync(`${process.cwd()}${env('PAGE_ELEMENTS_PATH')}`)
const payloadFiles = fs.readdirSync(`${process.cwd()}${env('MOCK_PAYLOAD_PATH')}`)

const getEnvList = (): string[] => {
    const envList = Object.keys(hostsConfig)

    if (envList.length === 0) {
        // Emoticon for error. Dynamite emoticon
        throw Error(`🧨 No environments mapped in your ${env('HOST_URLS_PATH')} 🧨 `)
    }
    return envList;
}


const pageElementMappings: PageElementMappings = mappingFiles.reduce(
    (pageElementConfigAcc, file) => {
        const key = file.replace('.json', '')
        const elementMappings = getJsonFromFile(`${env('PAGE_ELEMENTS_PATH')}${file}`)
        return {...pageElementConfigAcc, [key]: elementMappings}
    },
    {}
)

const mockPayloadMappings: MockPayloadMappings = payloadFiles.reduce(
    (payloadConfigAcc, file) => {
        const key = file.replace('.json', '')
        const payloadMappings = getJsonFromFile(`${env('MOCK_PAYLOAD_PATH')}${file}`)
        return {...payloadConfigAcc, [key]: payloadMappings}
    },
    {}
)

const worldParameters: GlobalConfig = {
    hostsConfig,
    pagesConfig,
    emailsConfig,
    errorsConfig,
    mocksConfig,
    pageElementMappings,
    mockPayloadMappings,
}


const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar \
                --parallel ${env('PARALLEL')} \
                --retry ${env('RETRY')}`;

//const dev = `${common} --tags '@dev'`;
const dev = generateCucumberRuntimeTag(common, environment, getEnvList(), 'dev');
//const smoke = `${common} --tags '@smoke'`;
const smoke = generateCucumberRuntimeTag(common, environment, getEnvList(), 'smoke');;
//const regression = `${common} --tags '@regression'`;
const regression = generateCucumberRuntimeTag(common, environment, getEnvList(), 'regression');;
//const regression = `${common} --tags '@regression'`;
const accessibility = generateCucumberRuntimeTag(common, environment, getEnvList(), 'accessibility');;

export { dev, smoke, regression, accessibility};