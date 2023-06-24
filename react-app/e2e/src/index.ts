import dotenv from 'dotenv'
import { env } from './env/parseEnv'
dotenv.config({path: env('COMMON_CONFIG_FILE')})


// Borrar todo esto
/* Read File */
//console.log(`Nombre del fichero: ${process.env.COMMON_CONFIG_FILE}`)
//const filename = env('UI_AUTOMATION_BROWSER')
//const filename = process.env.COMMON_CONFIG_FILE

/*
fs.readFile(filename, bar)
console.log(`Leyendo fichero: ${filename}  ::::::::::::::::::::::::::: `)
function bar (err, data)
  {
  err ? console.log("HAY ERROR     zzzzzzzz  " + err) : console.log("CORRECTO!")
  err ? Function("error","throw error")(err) : console.log(JSON.stringify(data) );
  };
// Hasta aquí
*/

const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                -f json:./reports/report.json \
                --format progress-bar`;

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

//console.log('\n 😃  😃  😃  😃')

export { dev, smoke, regression};