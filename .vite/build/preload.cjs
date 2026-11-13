let electron = require("electron");
// src/preload.ts
electron.contextBridge.exposeInMainWorld("electronAPI", { windowAction: (action) => electron.ipcRenderer.send("window:action", action) });
