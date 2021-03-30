import { AuthStateType } from '../data-types/auth-state-types'
import { isEmpty } from 'lodash'

const selectAuthState = (state: any): AuthStateType => {
    return state.authState
}
export const selectUUID = (state: any) => {
    return selectAuthState(state).uuid
}
export const selectUid = (state: any) => {
    return selectAuthState(state).uid
}
export const selectIsAuthenticated = (state: any) => {
    const authState = selectAuthState(state)
    return !isEmpty(authState.uid) && !isEmpty(authState.token)
}
export const selectAccessToken = (state: any) => {
    return selectAuthState(state).token
}
