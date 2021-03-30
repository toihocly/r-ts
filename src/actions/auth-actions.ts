import { AuthActionEnum, AuthActionTypes, SignUpActionType } from '../action-types/auth-action-types'
import { ErrorType } from '../data-types'

export const signUpAction = (params: Omit<SignUpActionType, 'type'>): AuthActionTypes => {
    return {
        ...params,
        type: AuthActionEnum.SIGN_UP,
    }
}
export const signUpFailureAction = (error: ErrorType): AuthActionTypes => {
    return {
        error,
        type: AuthActionEnum.SIGN_UP_FAILURE,
    }
}
export const loginAction = (email: string, password: string): AuthActionTypes => {
    return {
        email,
        password,
        type: AuthActionEnum.LOGIN,
    }
}
export const loginSuccessfullyAction = (uid: string, token: string): AuthActionTypes => {
    return {
        uid,
        token,
        type: AuthActionEnum.LOGIN_SUCCESSFULLY,
    }
}
export const clearCredentialAction = (): AuthActionTypes => {
    return {
        type: AuthActionEnum.CLEAR_CREDENTIAL,
    }
}
