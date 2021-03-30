import { SignUpPageActionEnum, SignUpPageActionTypes } from '../action-types/sign-up-page-action-types'
import { ErrorType, GenderEnum } from '../data-types'

export const changeSignUpPageFirstNameAction = (firstName: string | null): SignUpPageActionTypes => {
    return {
        firstName,
        type: SignUpPageActionEnum.CHANGE_FIRST_NAME,
    }
}
export const changeSignUpPageLastNameAction = (lastName: string | null): SignUpPageActionTypes => {
    return {
        lastName,
        type: SignUpPageActionEnum.CHANGE_LAST_NAME,
    }
}
export const changeSignUpPageEmailAction = (email: string | null): SignUpPageActionTypes => {
    return {
        email,
        type: SignUpPageActionEnum.CHANGE_EMAIL,
    }
}
export const changeSignUpPagePasswordAction = (password: string | null): SignUpPageActionTypes => {
    return {
        password,
        type: SignUpPageActionEnum.CHANGE_PASSWORD,
    }
}
export const changeSignUpPageGenderAction = (gender: GenderEnum | null): SignUpPageActionTypes => {
    return {
        gender,
        type: SignUpPageActionEnum.CHANGE_GENDER,
    }
}
export const changeSignUpPagePhoneNumberAction = (phoneNumber: string | null): SignUpPageActionTypes => {
    return {
        phoneNumber,
        type: SignUpPageActionEnum.CHANGE_PHONE_NUMBER,
    }
}
export const setSignUpPageLoadingAction = (loading: boolean): SignUpPageActionTypes => {
    return {
        loading,
        type: SignUpPageActionEnum.SET_LOADING,
    }
}
export const setSignUpPageErrorAction = (error: ErrorType | null): SignUpPageActionTypes => {
    return {
        error,
        type: SignUpPageActionEnum.SET_ERROR,
    }
}
