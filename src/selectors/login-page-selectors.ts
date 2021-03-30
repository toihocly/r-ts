import { LoginPageStateType } from '../data-types/login-page-state-types'

const selectLoginPageState = (state: any): LoginPageStateType => {
    return state.loginPageState
}
export const selectLoginPageEmail = (state: any) => {
    return selectLoginPageState(state).email
}
export const selectLoginPagePassword = (state: any) => {
    return selectLoginPageState(state).password
}
export const selectLoginPageIsRememberMe = (state: any) => {
    return selectLoginPageState(state).isRememberMe
}
export const selectLoginPageLoading = (state: any) => {
    return selectLoginPageState(state).loading
}
export const selectLoginPageError = (state: any) => {
    return selectLoginPageState(state).error
}
