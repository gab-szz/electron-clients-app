import { ipcMain } from 'electron'

ipcMain.handle('fetch-users', () => {
  console.log('Buscando usuários...')

  return [{ id: 1, nome: 'Gabriel' }]
})
