import { LoginPageActionEnum, LoginPageActionTypes } from '../action-types/login-page-action-types'
import { ErrorType } from '../data-types'

export const changeLoginPageEmailAction = (email: string): LoginPageActionTypes => {
    return {
        email,
        type: LoginPageActionEnum.CHANGE_EMAIL,
    }
}
export const changeLoginPagePasswordAction = (password: string): LoginPageActionTypes => {
    return {
        password,
        type: LoginPageActionEnum.CHANGE_PASSWORD,
    }
}
export const setLoginPageRememberMeAction = (isRememberMe: boolean): LoginPageActionTypes => {
    return {
        isRememberMe,
        type: LoginPageActionEnum.SET_REMEMBER_ME,
    }
}
export const setLoginPageLoadingAction = (loading: boolean): LoginPageActionTypes => {
    return {
        loading,
        type: LoginPageActionEnum.SET_LOADING,
    }
}
export const setLoginPageErrorAction = (error: ErrorType | null): LoginPageActionTypes => {
    return {
        error,
        type: LoginPageActionEnum.SET_ERROR,
    }
}
