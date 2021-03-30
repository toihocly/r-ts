import { ErrorType, GenderEnum } from '../data-types'

export enum SignUpPageActionEnum {
    CHANGE_FIRST_NAME = 'SIGN_UP_PAGE_ACTIONS/CHANGE_FIRST_NAME',
    CHANGE_LAST_NAME = 'SIGN_UP_PAGE_ACTIONS/CHANGE_LAST_NAME',
    CHANGE_EMAIL = 'SIGN_UP_PAGE_ACTIONS/CHANGE_EMAIL',
    CHANGE_PASSWORD = 'SIGN_UP_PAGE_ACTIONS/CHANGE_PASSWORD',
    CHANGE_GENDER = 'SIGN_UP_PAGE_ACTIONS/CHANGE_GENDER',
    CHANGE_PHONE_NUMBER = 'SIGN_UP_PAGE_ACTIONS/CHANGE_PHONE_NUMBER',
    SET_LOADING = 'SIGN_UP_PAGE_ACTIONS/SET_LOADING',
    SET_ERROR = 'SIGN_UP_PAGE_ACTIONS/SET_ERROR',
}

export type ChangeSignUpPageFirstNameActionType = {
    type: SignUpPageActionEnum.CHANGE_FIRST_NAME
    firstName: string | null
}
export type ChangeSignUpPageLastNameActionType = {
    type: SignUpPageActionEnum.CHANGE_LAST_NAME
    lastName: string | null
}
export type ChangeSignUpPageEmailActionType = {
    type: SignUpPageActionEnum.CHANGE_EMAIL
    email: string | null
}
export type ChangeSignUpPagePasswordActionType = {
    type: SignUpPageActionEnum.CHANGE_PASSWORD
    password: string | null
}
export type ChangeSignUpPageGenderActionType = {
    type: SignUpPageActionEnum.CHANGE_GENDER
    gender: GenderEnum | null
}
export type ChangeSignUpPagePhoneNumberActionType = {
    type: SignUpPageActionEnum.CHANGE_PHONE_NUMBER
    phoneNumber: string | null
}
export type SetSignUpPageLoadingActionType = {
    type: SignUpPageActionEnum.SET_LOADING
    loading: boolean
}
export type SetSignUpPageErrorActionType = {
    type: SignUpPageActionEnum.SET_ERROR
    error: ErrorType | null
}
export type SignUpPageActionTypes = ChangeSignUpPageFirstNameActionType
                                    | ChangeSignUpPageLastNameActionType
                                    | ChangeSignUpPageEmailActionType
                                    | ChangeSignUpPagePasswordActionType
                                    | ChangeSignUpPageGenderActionType
                                    | ChangeSignUpPagePhoneNumberActionType
                                    | SetSignUpPageLoadingActionType
                                    | SetSignUpPageErrorActionType
