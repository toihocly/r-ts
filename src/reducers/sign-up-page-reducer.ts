import { SignUpPageStateType } from '../data-types/sign-up-page-state-types'
import { SignUpPageActionEnum, SignUpPageActionTypes } from '../action-types/sign-up-page-action-types'

const initState: SignUpPageStateType = {
    firstName: null,
    lastName: null,
    password: null,
    email: null,
    gender: null,
    phoneNumber: null,
    loading: false,
    error: null,
}
export default (state: SignUpPageStateType = initState, action: SignUpPageActionTypes): SignUpPageStateType => {
    switch (action.type) {
        case SignUpPageActionEnum.CHANGE_FIRST_NAME:
            return {
                ...state,
                firstName: action.firstName,
            }
        case SignUpPageActionEnum.CHANGE_LAST_NAME:
            return {
                ...state,
                lastName: action.lastName,
            }
        case SignUpPageActionEnum.CHANGE_EMAIL:
            return {
                ...state,
                email: action.email,
            }
        case SignUpPageActionEnum.CHANGE_PASSWORD:
            return {
                ...state,
                password: action.password,
            }
        case SignUpPageActionEnum.CHANGE_GENDER:
            return {
                ...state,
                gender: action.gender,
            }
        case SignUpPageActionEnum.CHANGE_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.phoneNumber,
            }
        case SignUpPageActionEnum.SET_LOADING:
            return {
                ...state,
                loading: action.loading,
            }
        case SignUpPageActionEnum.SET_ERROR:
            return {
                ...state,
                error: action.error,
            }
    }
    return state
}
