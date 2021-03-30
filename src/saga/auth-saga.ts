import { call, put, select, takeLeading } from 'redux-saga/effects'
import { AuthActionEnum, LoginActionType, SignUpActionType } from '../action-types/auth-action-types'
import { setSignUpPageErrorAction, setSignUpPageLoadingAction } from '../actions/sign-up-page-actions'
import AuthApiProvider from '../api/AuthApiProvider'
import { loginSuccessfullyAction, signUpFailureAction } from '../actions/auth-actions'
import { createError } from '../helpers/error-helpers'
import { changeLoginPageEmailAction, setLoginPageErrorAction, setLoginPageLoadingAction } from '../actions/login-page-actions'
import { replaceRouterAction } from '../actions/router-actions'
import { isEmpty } from 'lodash'
import { ErrorCode } from '../data-types'
import { selectUUID } from '../selectors/auth-selectors'

const authApiProvider = new AuthApiProvider()

function* signUpSaga(action: SignUpActionType) {
    const {
        phone,
        gender,
        password,
        lastName,
        firstName,
        email,
        appleId,
        facebookId,
    } = action
    yield put(setSignUpPageErrorAction(null))
    yield put(setSignUpPageLoadingAction(true))
    try {
        const result = yield call(authApiProvider.signUp, {
            gender: gender,
            type: 'ADMIN',
            firstName: firstName,
            lastName: lastName,
            appleID: appleId,
            email: email,
            facebookID: facebookId,
            passWord: password,
            phone: phone,
        })
        if (result.errorCode === 0) {
            yield put(setSignUpPageErrorAction(null))
            yield put(setSignUpPageLoadingAction(false))
            yield put(replaceRouterAction('/'))
            yield put(changeLoginPageEmailAction(email!))
        } else {
            throw createError(result?.errorCode, result?.data?.message)
        }
    } catch (e) {
        yield put(signUpFailureAction(e))
        yield put(setSignUpPageLoadingAction(false))
        yield put(setSignUpPageErrorAction(e))
    }
}

function* loginSaga(action: LoginActionType) {
    const {
        email,
        password,
    } = action
    try {
        if (isEmpty(email) || isEmpty(password)) {
            throw createError(ErrorCode.EMAIL_OR_PASSWORD_EMPTY, 'Email or Password must be not empty')
        }
        const uuid = yield select(selectUUID)
        yield put(setLoginPageLoadingAction(true))
        yield put(setLoginPageErrorAction(null))
        const result = yield call(authApiProvider.login, {
            uuid,
            user: email,
            passWord: password,
        })
        if (result?.errorCode === 0 && !isEmpty(result.data)) {
            const {
                token,
                user,
            } = result.data
            yield put(loginSuccessfullyAction(user, token))
            yield put(setLoginPageLoadingAction(false))
            yield put(setLoginPageErrorAction(null))
            yield put(replaceRouterAction('/'))
        } else {
            throw createError(result?.errCode, result?.data?.message)
        }
    } catch (e) {
        yield put(setLoginPageLoadingAction(false))
        yield put(setLoginPageErrorAction(e))
    }
}

export default function* authSaga() {
    yield takeLeading(AuthActionEnum.SIGN_UP, signUpSaga)
    yield takeLeading(AuthActionEnum.LOGIN, loginSaga)
}
