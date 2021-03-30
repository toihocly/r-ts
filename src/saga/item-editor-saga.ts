import { call, put, select, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects'
import {
    ItemEditorActionEnum,
    ItemEditorChangeCatIdActionType,
    ItemEditorUploadItemImageActionType,
    TranslateColorActionType,
} from '../action-types/item-editor-action-types'
import { selectAccessToken } from '../selectors/auth-selectors'
import { get, head, isEmpty, map } from 'lodash'
import ItemApiProvider from '../api/ItemApiProvider'
import { clearCredentialAction } from '../actions/auth-actions'
import { ErrorCode } from '../data-types'
import { pushRouterAction } from '../actions/router-actions'
import { Routes } from '../routes'
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router'
import {
    clearItemEditorAllAction,
    clearItemEditorCatAndFeatureAction,
    setItemEditorColorAction,
    setItemEditorColorsAction,
    setItemEditorErrorAction,
    setItemEditorImageUrlAction,
    setItemEditorLoadingAction,
} from '../actions/item-editor-actions'
import { selectItemEditorHasCatAndFeatureData, selectItemEditorIsEmpty } from '../selectors/item-editor-selectors'
import { ItemColorType } from '../data-types/item-state-types'
import { transformApiItemColor } from '../transform-data/item-api-transformer'

function* uploadItem(action: ItemEditorUploadItemImageActionType) {
    try {
        const {
            file,
        } = action
        const token = yield select(selectAccessToken)
        if (file && !isEmpty(token)) {
            yield put(setItemEditorLoadingAction(true))
            yield put(setItemEditorErrorAction(null))
            const itemApiProvider = new ItemApiProvider(token)
            const result = yield call(itemApiProvider.upload, file)
            const {
                errorCode,
                data,
            } = result
            if (errorCode === 0 && !isEmpty(data)) {
                const {
                    color,
                    image,
                } = data
                const colorData = map(color, checkingColor => transformApiItemColor(checkingColor))
                if (!isEmpty(colorData)) {
                    yield put(setItemEditorColorsAction(colorData!))
                }
                yield put(setItemEditorImageUrlAction(image))
                yield put(setItemEditorLoadingAction(false))
            } else {
                throw {
                    code: errorCode,
                    message: get(data, 'message', data),
                }
            }
        }
    } catch (e) {
        yield put(setItemEditorLoadingAction(false))
        switch (e.response?.status) {
            case ErrorCode.UNAUTHORIZED:
                yield put(clearCredentialAction())
                break
            default:
                yield put(setItemEditorErrorAction(e))
                break
        }
    }
}

function* changeCatIdSaga(action: ItemEditorChangeCatIdActionType) {
    const {
        catId,
    } = action
    yield put(pushRouterAction(Routes.CREATE_ITEM_ROUTE, {
        catId,
    }))
}

function* watchLocationChange(action: LocationChangeAction) {
    const {
        pathname,
        search,
    } = action.payload.location
    if (pathname === Routes.CREATE_ITEM_ROUTE) {
        if (isEmpty(search) && (yield select(selectItemEditorHasCatAndFeatureData))) {
            yield put(clearItemEditorCatAndFeatureAction())
        }
    } else {
        if (!(yield select(selectItemEditorIsEmpty))) {
            yield put(clearItemEditorAllAction())
        }
    }
}

function* selectColorSaga(action: TranslateColorActionType) {
    try {
        const {
            color,
            index,
        } = action
        const token = yield select(selectAccessToken)
        if (!isEmpty(color) && !isEmpty(token)) {
            const itemApiProvider = new ItemApiProvider(token)
            const result = yield call(itemApiProvider.translateColor, [color])
            const {
                errorCode,
                data,
            } = result
            if (errorCode === 0 && !isEmpty(data)) {
                const itemColor: ItemColorType = transformApiItemColor(head(data))
                yield put(setItemEditorColorAction(itemColor, index))
            }
        }
    } catch (e) {
        switch (e.response?.status) {
            case ErrorCode.UNAUTHORIZED:
                yield put(clearCredentialAction())
                break
        }
    }
}

export default function* itemEditorSaga() {
    yield takeEvery(LOCATION_CHANGE, watchLocationChange)
    yield takeLeading(ItemEditorActionEnum.UPLOAD_ITEM_IMAGE, uploadItem)
    yield takeLatest(ItemEditorActionEnum.CHANGE_CAT_ID, changeCatIdSaga)
    yield takeLatest(ItemEditorActionEnum.TRANSLATE_COLOR, selectColorSaga)
}
