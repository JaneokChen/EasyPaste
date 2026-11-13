/// <reference types="@electron-forge/plugin-vite/forge-vite-env" />
declare module '*.css';

export interface IElectronAPI{
  windowAction: () => void
}

declare global {
  interface window {
    electronAPI: IElectronAPI
  }
}