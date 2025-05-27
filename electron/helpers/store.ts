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

    ipcMain.handle('dispatch: upgradeDefaultUser', (_, { userID, userName }) => {
    const current = userStore.store;

    const userKeys = Object.keys(current.users);
    if (userKeys.length !== 1 || userKeys[0] !== 'defaultUserID') {
        throw new Error('Cannot upgrade default user: unexpected user state');
    }

    const { games, activeGame } = current.users['defaultUserID'];

    userStore.set({
        ...current,
        users: {
            [userID]: { name: userName, activeGame, games }
        },
        active: userName
        });
    });

    ipcMain.handle('dispatch: addGame', (_, userID: string, game: Game) => {
        const state = userStore.store
            state.users[userID].games.push(game)
            userStore.set(state);
        });
// dev tools, remove in prod
     ipcMain.handle('dispatch: devResetState', ()=> userStore.set(userState))   
}

