import { MediaActionEnum, MediaActionTypes } from '../action-types/media-action-types'
import { ErrorType } from '../data-types'

export const uploadMediaAction = (file: File, requestId: string): MediaActionTypes => {
    return {
        file,
        requestId,
        type: MediaActionEnum.UPLOAD_MEDIA,
    }
}
export const uploadMediaSuccessfullyAction = (mediaUrl: string, requestId: string): MediaActionTypes => {
    return {
        mediaUrl,
        requestId,
        type: MediaActionEnum.UPLOAD_MEDIA_SUCCESSFULLY,
    }
}
export const uploadMediaFailureAction = (error: ErrorType | null, requestId: string): MediaActionTypes => {
    return {
        error,
        requestId,
        type: MediaActionEnum.UPLOAD_MEDIA_FAILURE,
    }
}
