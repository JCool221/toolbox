"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args) {
    const [channel, listener] = args;
    return electron.ipcRenderer.on(channel, (event, ...args2) => listener(event, ...args2));
  },
  off(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.off(channel, ...omit);
  },
  send(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.send(channel, ...omit);
  },
  invoke(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.invoke(channel, ...omit);
  }
  // You can expose other APTs you need here.
  // ...
});
electron.contextBridge.exposeInMainWorld("api", {
  get: (..._args) => electron.ipcRenderer.invoke("api: get", ..._args)
});
electron.contextBridge.exposeInMainWorld("dispatch", {
  getUser: () => electron.ipcRenderer.invoke("dispatch: getUser"),
  upgradeDefaultUser: (payload) => electron.ipcRenderer.invoke("dispatch: upgradeDefaultUser", payload),
  // dev tools, remove in prod
  devResetState: () => electron.ipcRenderer.invoke("dispatch: devResetState")
});
