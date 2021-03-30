import { ErrorType } from '../data-types'

export enum MediaActionEnum {
    UPLOAD_MEDIA = 'MEDIA_ACTIONS/UPLOAD_MEDIA',
    UPLOAD_MEDIA_SUCCESSFULLY = 'MEDIA_ACTIONS/UPLOAD_MEDIA_SUCCESSFULLY',
    UPLOAD_MEDIA_FAILURE = 'MEDIA_ACTIONS/UPLOAD_MEDIA_FAILURE',
}

export type UploadMediaActionType = {
    type: MediaActionEnum.UPLOAD_MEDIA,
    file: File,
    requestId: string
}
export type UploadMediaSuccessfullyAction = {
    type: MediaActionEnum.UPLOAD_MEDIA_SUCCESSFULLY,
    mediaUrl: string
    requestId: string
}
export type UploadMediaFailureAction = {
    type: MediaActionEnum.UPLOAD_MEDIA_FAILURE,
    error?: ErrorType | null
    requestId: string
}
export type MediaActionTypes = UploadMediaActionType
                               | UploadMediaSuccessfullyAction
                               | UploadMediaFailureAction
