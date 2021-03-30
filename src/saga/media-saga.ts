import { call, put, select, takeEvery } from 'redux-saga/effects'
import { MediaActionEnum, UploadMediaActionType } from '../action-types/media-action-types'
import { selectAccessToken } from '../selectors/auth-selectors'
import { get, isEmpty } from 'lodash'
import { createError } from '../helpers/error-helpers'
import MediaApiProvider from '../api/MediaApiProvider'
import { uploadMediaFailureAction, uploadMediaSuccessfullyAction } from '../actions/media-actions'

function* handleUploadMedia(action: UploadMediaActionType) {
    const token = yield select(selectAccessToken)
    const {
        file,
        requestId,
    } = action
    try {
        if (file && !isEmpty(token)) {
            const mediaProvider = new MediaApiProvider(token)
            const {
                errorCode,
                data,
            } = yield call(mediaProvider.upload, file)
            if (errorCode === 0 && !isEmpty(data)) {
                const url = get(data, 'url')
                if (!isEmpty(url)) {
                    yield put(uploadMediaSuccessfullyAction(url, requestId))
                } else {
                    throw createError(errorCode, get(data, 'message', data))
                }
            } else {
                throw createError(errorCode, get(data, 'message', data))
            }
        }
    } catch (e) {
        yield put(uploadMediaFailureAction(e, requestId))
    }
}

export default function* mediaSaga() {
    yield takeEvery(MediaActionEnum.UPLOAD_MEDIA, handleUploadMedia)
}
