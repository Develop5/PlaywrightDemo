import dotenv from 'dotenv'
import { env, getJsonFromFile } from './env/parseEnv'
import {
    GlobalConfig,
    HostsConfig,
    PagesConfig,
    PageElementMappings,
} from './env/global'

import * as fs from "fs";

const environment = env('NODE_ENV')

dotenv.config({path: env('COMMON_CONFIG_FILE')})
dotenv.config({path: `${env('ENV_PATH')}${environment}.env`})

const hostsConfig: HostsConfig = getJsonFromFile(env('HOST_URL_PATH'))
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGE_URL_PATH'))
const mappingFiles = fs.readdirSync(`${process.cwd()}${env('PAGE_ELEMENT_PATH')}`)


const pageElementMappings: PageElementMappings = mappingFiles.reduce(
    (pageElementConfigAcc: {}, file: string) => {
        const key = file.replace('.json', '')
        const elementMappings = getJsonFromFile(`${env('PAGE_ELEMENT_PATH')}${file}`)
        return {...pageElementConfigAcc, [key]: elementMappings}
    },
    {}
)

const worldParameters: GlobalConfig = {
    hostsConfig,
    pagesConfig,
    pageElementMappings,
}


const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar \
                --parallel ${env('PARALLEL')} \
                --retry ${env('RETRY')}`;

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

export { dev, smoke, regression};