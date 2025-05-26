import { ipcMain } from "electron";
import * as utils from './utils'


export function registerApiHandlers() {
    ipcMain.handle('api: get', async (_event, key:string, ..._args:unknown[]) => {
        const fn = utils[key as keyof typeof utils] as (...args:unknown[])=> unknown
        return typeof fn === 'function' ? fn(..._args) : `Unknown key: ${key}`
    })
}


// export function registerApiHandlers() {
//     ipcMain.handle('api: get', async(_event, ..._args)=> {
//         return 'No Args'
//     })
// }
