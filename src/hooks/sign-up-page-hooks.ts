import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectSignUpPageEmail,
    selectSignUpPageError,
    selectSignUpPageFirstName,
    selectSignUpPageGender,
    selectSignUpPageIsLoading,
    selectSignUpPageLastName,
    selectSignUpPagePassword,
    selectSignUpPagePhoneNumber,
} from '../selectors/sign-up-page-selectors'
import {
    changeSignUpPageEmailAction,
    changeSignUpPageFirstNameAction,
    changeSignUpPageGenderAction,
    changeSignUpPageLastNameAction,
    changeSignUpPagePasswordAction,
    changeSignUpPagePhoneNumberAction,
} from '../actions/sign-up-page-actions'
import { GenderEnum } from '../data-types'

export const useSignUpPageFirstName = () => {
    return useSelector(selectSignUpPageFirstName)
}
export const useSignUpPageLastName = () => {
    return useSelector(selectSignUpPageLastName)
}
export const useSignUpPageEmail = () => {
    return useSelector(selectSignUpPageEmail)
}
export const useSignUpPagePassword = () => {
    return useSelector(selectSignUpPagePassword)
}
export const useSignUpPageGender = () => {
    return useSelector(selectSignUpPageGender)
}
export const useSignUpPagePhoneNumber = () => {
    return useSelector(selectSignUpPagePhoneNumber)
}
export const useSignUpPageIsLoading = () => {
    return useSelector(selectSignUpPageIsLoading)
}
export const useSignUpPageError = () => {
    return useSelector(selectSignUpPageError)
}
export const useChangeSignUpPageFirstNameCallback = () => {
    const dispatch = useDispatch()
    return React.useCallback((text: string | null) => {
        dispatch(changeSignUpPageFirstNameAction(text))
    }, [])
}
export const useChangeSignUpPageLastNameCallback = () => {
    const dispatch = useDispatch()
    return React.useCallback((text: string | null) => {
        dispatch(changeSignUpPageLastNameAction(text))
    }, [])
}
export const useChangeSignUpPageEmailCallback = () => {
    const dispatch = useDispatch()
    return React.useCallback((text: string | null) => {
        dispatch(changeSignUpPageEmailAction(text))
    }, [])
}
export const useChangeSignUpPagePasswordCallback = () => {
    const dispatch = useDispatch()
    return React.useCallback((text: string | null) => {
        dispatch(changeSignUpPagePasswordAction(text))
    }, [])
}
export const useChangeSignUpPageGenderCallback = () => {
    const dispatch = useDispatch()
    return React.useCallback((gender: GenderEnum | null) => {
        dispatch(changeSignUpPageGenderAction(gender))
    }, [])
}
export const useChangeSignUpPagePhoneNumberCallback = () => {
    const dispatch = useDispatch()
    return React.useCallback((phoneNumber: string | null) => {
        dispatch(changeSignUpPagePhoneNumberAction(phoneNumber))
    }, [])
}
