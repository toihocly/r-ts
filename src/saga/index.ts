import { all, call } from 'redux-saga/effects'
import authSaga from './auth-saga'
import routerSaga from './router-saga'
import itemSaga from './item-saga'
import itemEditorSaga from './item-editor-saga'
import mediaSaga from './media-saga'

export default function* rootSaga() {
    yield all([call(authSaga), call(routerSaga), call(itemSaga), call(itemEditorSaga), call(mediaSaga)])
}
