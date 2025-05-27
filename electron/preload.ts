import { ipcRenderer, contextBridge } from 'electron'
import { upgradePayload } from './helpers/types'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('ipcRenderer', {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args
    return ipcRenderer.on(channel, (event, ...args) => listener(event, ...args))
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args
    return ipcRenderer.off(channel, ...omit)
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args
    return ipcRenderer.send(channel, ...omit)
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args
    return ipcRenderer.invoke(channel, ...omit)
  },

  // You can expose other APTs you need here.
  // ...
})

contextBridge.exposeInMainWorld('api', {
  get: (..._args: unknown[]) => ipcRenderer.invoke('api: get', ..._args)
})

contextBridge.exposeInMainWorld('dispatch', {
  getUser: () => ipcRenderer.invoke('dispatch: getUser'),
  upgradeDefaultUser: (payload: upgradePayload) => ipcRenderer.invoke('dispatch: upgradeDefaultUser', payload),
  // dev tools, remove in prod
  devResetState: () => ipcRenderer.invoke('dispatch: devResetState')
})