import { nanoid } from "nanoid"

export const makeUserID =():string => {
    const userID = nanoid()
    return userID
}

export const testLog = ():string=> {
    return 'no args'
}