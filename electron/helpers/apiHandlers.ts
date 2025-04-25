import { ipcMain } from "electron";

export function registerApiHandlers() {
    ipcMain.handle('api: get', async(_event, ...args)=> {
        return 'GET GOT KID'
    })
}