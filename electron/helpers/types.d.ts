export interface Character {
    name: string
    id: string
    game: string
    npc: boolean
  }
  
export interface Game {
    id: string
    title: string
    characters: Character[]
  }
  
export interface User {
    name: string
    activeGame: string | null
    games: Game[]
  }
  
export interface UserState {
    users: Record<string, user>
    active: string
  }

export interface upgradePayload {
    userID: string
    userName: string
  }