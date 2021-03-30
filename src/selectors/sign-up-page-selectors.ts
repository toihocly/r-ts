import { SignUpPageStateType } from '../data-types/sign-up-page-state-types'

const selectSignUpPageState = (state: any): SignUpPageStateType => {
    return state.signUpPageState
}
export const selectSignUpPageFirstName = (state: any) => {
    return selectSignUpPageState(state).firstName
}
export const selectSignUpPageLastName = (state: any) => {
    return selectSignUpPageState(state).lastName
}
export const selectSignUpPageEmail = (state: any) => {
    return selectSignUpPageState(state).email
}
export const selectSignUpPagePassword = (state: any) => {
    return selectSignUpPageState(state).password
}
export const selectSignUpPageGender = (state: any) => {
    return selectSignUpPageState(state).gender
}
export const selectSignUpPagePhoneNumber = (state: any) => {
    return selectSignUpPageState(state).phoneNumber
}
export const selectSignUpPageIsLoading = (state: any) => {
    return selectSignUpPageState(state).loading
}
export const selectSignUpPageError = (state: any) => {
    return selectSignUpPageState(state).error
}
