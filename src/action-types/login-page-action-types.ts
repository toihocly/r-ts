import { ErrorType } from '../data-types'

export enum LoginPageActionEnum {
    CHANGE_EMAIL = 'LOGIN_PAGE_ACTIONS/CHANGE_EMAIL',
    CHANGE_PASSWORD = 'LOGIN_PAGE_ACTIONS/CHANGE_PASSWORD',
    SET_REMEMBER_ME = 'LOGIN_PAGE_ACTIONS/SET_REMEMBER_ME',
    SET_LOADING = 'LOGIN_PAGE_ACTIONS/SET_LOADING',
    SET_ERROR = 'LOGIN_PAGE_ACTIONS/SET_ERROR',
}

export type ChangeLoginPageEmailActionType = {
    type: LoginPageActionEnum.CHANGE_EMAIL
    email: string
}
export type ChangeLoginPagePasswordActionType = {
    type: LoginPageActionEnum.CHANGE_PASSWORD
    password: string
}
export type SetLoginPageRememberMeActionType = {
    type: LoginPageActionEnum.SET_REMEMBER_ME
    isRememberMe: boolean
}
export type SetLoginPageLoadingActionType = {
    type: LoginPageActionEnum.SET_LOADING
    loading: boolean
}
export type SetLoginPageErrorActionType = {
    type: LoginPageActionEnum.SET_ERROR
    error: ErrorType | null
}
export type LoginPageActionTypes = ChangeLoginPageEmailActionType
                                   | ChangeLoginPagePasswordActionType
                                   | SetLoginPageRememberMeActionType
                                   | SetLoginPageLoadingActionType
                                   | SetLoginPageErrorActionType
