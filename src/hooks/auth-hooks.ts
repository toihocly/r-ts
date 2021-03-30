import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, signUpAction } from '../actions/auth-actions'
import { SignUpActionType } from '../action-types/auth-action-types'
import { selectIsAuthenticated } from '../selectors/auth-selectors'

export const useIsAuthenticated = () => {
    return useSelector(selectIsAuthenticated)
}
export const useSignUp = () => {
    const dispatch = useDispatch()
    return React.useCallback((params: Omit<SignUpActionType, 'type'>) => {
        dispatch(signUpAction(params))
    }, [])
}
export const useLogin = () => {
    const dispatch = useDispatch()
    return React.useCallback((email: string, password: string) => {
        dispatch(loginAction(email, password))
    }, [])
}
