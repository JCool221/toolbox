export {}

declare global {
  interface Window {
    api: {
      get: () => Promise<any>
    }
    settings: {

    }
    dispatch: {

    }
  }
  
}
