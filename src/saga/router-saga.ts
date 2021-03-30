import { put, takeLatest } from 'redux-saga/effects'
import { NavigateRouterActionType, RouterActionEnum } from '../action-types/router-action-types'
import { push, replace } from 'connected-react-router'
import { isEmpty } from 'lodash'
import queryString from 'query-string'

function* navigateRouterSaga(action: NavigateRouterActionType) {
    const {
        pathname,
        query,
        routerAction,
    } = action
    const search = isEmpty(query) ? '' : queryString.stringify(query!)
    switch (routerAction) {
        case 'replace':
            if (pathname) {
                yield put(replace({
                    pathname,
                }))
            }
            break
        case 'push':
            if (pathname) {
                yield put(push({
                    pathname,
                    search,
                }))
            }
            break
    }
}

export default function* routerSaga() {
    yield takeLatest(RouterActionEnum.NAVIGATE, navigateRouterSaga)
}
