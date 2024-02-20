import { SET_USER } from "./Type"

export const setUser=(user)=>({
    type:SET_USER,
    payload:user,
})