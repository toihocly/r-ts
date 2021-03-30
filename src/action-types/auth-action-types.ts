import { ErrorType, GenderEnum } from '../data-types'

export enum AuthActionEnum {
    SIGN_UP = 'AUTH_ACTIONS/SIGN_UP',
    SIGN_UP_SUCCESSFULLY = 'AUTH_ACTIONS/SIGN_UP_SUCCESSFULLY',
    SIGN_UP_FAILURE = 'AUTH_ACTIONS/SIGN_UP_FAILURE',
    LOGIN = 'AUTH_ACTIONS/LOGIN',
    LOGIN_SUCCESSFULLY = 'AUTH_ACTIONS/LOGIN_SUCCESSFULLY',
    LOGIN_FAILURE = 'AUTH_ACTIONS/LOGIN_FAILURE',
    CLEAR_CREDENTIAL = 'AUTH_ACTIONS/CLEAR_CREDENTIAL',
}

export type SignUpActionType = {
    type: AuthActionEnum.SIGN_UP,
    username?: string | null
    email?: string | null
    appleId?: string | null
    facebookId?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    gender?: GenderEnum | null
    phone?: string | null
}
export type SignUpSuccessfullyActionType = {
    type: AuthActionEnum.SIGN_UP_SUCCESSFULLY,
}
export type SignUpFailureActionType = {
    type: AuthActionEnum.SIGN_UP_FAILURE,
    error: ErrorType
}
export type LoginActionType = {
    type: AuthActionEnum.LOGIN,
    email: string
    password: string
}
export type LoginSuccessfullyActionType = {
    type: AuthActionEnum.LOGIN_SUCCESSFULLY,
    token: string
    uid: string
}
export type LoginFailureActionType = {
    type: AuthActionEnum.LOGIN_FAILURE,
    error: ErrorType
}
export type ClearCredentialActionType = {
    type: AuthActionEnum.CLEAR_CREDENTIAL
}
export type AuthActionTypes = SignUpActionType
                              | SignUpSuccessfullyActionType
                              | SignUpFailureActionType
                              | LoginActionType
                              | LoginSuccessfullyActionType
                              | LoginFailureActionType
                              | ClearCredentialActionType
