import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectLoginPageEmail,
    selectLoginPageError,
    selectLoginPageIsRememberMe,
    selectLoginPageLoading,
    selectLoginPagePassword,
} from '../selectors/login-page-selectors'
import { changeLoginPageEmailAction, changeLoginPagePasswordAction, setLoginPageRememberMeAction } from '../actions/login-page-actions'

export const useLoginPageEmail = () => {
    return useSelector(selectLoginPageEmail)
}
export const useLoginPagePassword = () => {
    return useSelector(selectLoginPagePassword)
}
export const useLoginPageIsRememberMe = () => {
    return useSelector(selectLoginPageIsRememberMe)
}
export const useLoginPageLoading = () => {
    return useSelector(selectLoginPageLoading)
}
export const useLoginPageError = () => {
    return useSelector(selectLoginPageError)
}
export const useChangeLoginPageEmail = () => {
    const dispatch = useDispatch()
    return React.useCallback((email: string) => {
        dispatch(changeLoginPageEmailAction(email))
    }, [])
}
export const useChangeLoginPagePassword = () => {
    const dispatch = useDispatch()
    return React.useCallback((password: string) => {
        dispatch(changeLoginPagePasswordAction(password))
    }, [])
}
export const useSetLoginPageRememberMe = () => {
    const dispatch = useDispatch()
    return React.useCallback((isRememberMe: boolean) => {
        dispatch(setLoginPageRememberMeAction(isRememberMe))
    }, [])
}
