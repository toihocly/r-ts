import { LoginPageStateType, PersistedLoginPageStateType } from '../data-types/login-page-state-types'
import { LoginPageActionEnum, LoginPageActionTypes } from '../action-types/login-page-action-types'

const initState: LoginPageStateType = Object.freeze({
    email: '',
    password: '',
    isRememberMe: false,
    loading: false,
    error: null,
})
export default (state: LoginPageStateType = initState, action: LoginPageActionTypes): LoginPageStateType => {
    switch (action.type) {
        case LoginPageActionEnum.CHANGE_EMAIL:
            return {
                ...state,
                email: action.email,
            }
        case LoginPageActionEnum.CHANGE_PASSWORD:
            return {
                ...state,
                password: action.password,
            }
        case LoginPageActionEnum.SET_REMEMBER_ME:
            return {
                ...state,
                isRememberMe: action.isRememberMe,
            }
        case LoginPageActionEnum.SET_LOADING:
            return {
                ...state,
                loading: action.loading,
            }
        case LoginPageActionEnum.SET_ERROR:
            return {
                ...state,
                error: action.error,
            }
    }
    return state
}

export const toJS = (state: LoginPageStateType): PersistedLoginPageStateType => {
    const {
        email,
        isRememberMe,
    } = state
    return {
        email,
        isRememberMe,
    }
}
export const fromJS = (state: PersistedLoginPageStateType): LoginPageStateType => {
    const {
        email,
        isRememberMe,
    } = state
    return {
        ...initState,
        email,
        isRememberMe,
    }
}
