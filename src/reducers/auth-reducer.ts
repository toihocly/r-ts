import { AuthStateType, PersistedAuthStateType } from '../data-types/auth-state-types'
import { AuthActionEnum, AuthActionTypes } from '../action-types/auth-action-types'
import nextId from 'react-id-generator'

const initState: AuthStateType = {
    uuid: nextId(),
    uid: null,
    token: null,
}
export default (state: AuthStateType = initState, action: AuthActionTypes): AuthStateType => {
    switch (action.type) {
        case AuthActionEnum.LOGIN_SUCCESSFULLY:
            return {
                ...state,
                token: action.token,
                uid: action.uid,
            }
        case AuthActionEnum.CLEAR_CREDENTIAL:
            return {
                ...state,
                uid: null,
                token: null,
            }
    }
    return state
}
export const toJS = (state: AuthStateType): PersistedAuthStateType => {
    const {
        uid,
        uuid,
        token,
    } = state
    return {
        uid,
        uuid,
        token,
    }
}
export const fromJS = (state: PersistedAuthStateType): AuthStateType => {
    const {
        uid,
        uuid,
        token,
    } = state
    return {
        ...initState,
        uid,
        token,
        uuid: uuid || nextId(),
    }
}
