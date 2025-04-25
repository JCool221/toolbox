import Store from 'electron-store'
import { UserState, Game } from './types'
import { ipcMain } from 'electron'

const userStore = new Store<UserState>()

const userState: UserState = {
    users: {
        "defaultUserID": {
            name: 'default',
            activeGame: null,
            games: [],
        },
    },
    active: 'default',
}

if (Object.keys(userStore.store).length === 0) {
    userStore.set(userState)
}

export function setupStoreIPC() {
    ipcMain.handle('dispatch: getUser', ()=> userStore.store)

    ipcMain.handle('dispatch: newUser', (_, patch: Partial<UserState>) => {
        const current = userStore.store
        const updated = {
            ...current,
            ...patch,
            users:{
                ...current.users,
                ...patch.users
            }
        }
        userStore.set(updated)    
    } )

    ipcMain.handle('dispatch:addGame', (_, userId: string, game: Game) => {
        const state = userStore.store
            state.users[userId].games.push(game)
            userStore.set(state);
        });
}