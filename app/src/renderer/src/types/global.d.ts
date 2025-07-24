export {}

declare global {
  interface Window {
    api: {
      fetchUsers: () => Promise<any>
    }
  }
}
