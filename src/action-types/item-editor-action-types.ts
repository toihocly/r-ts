import { ItemColorType } from '../data-types/item-state-types'
import { ClearCredentialActionType } from './auth-action-types'
import { ErrorType } from '../data-types'

export enum ItemEditorActionEnum {
    UPLOAD_ITEM_IMAGE = 'ITEM_EDITOR_ACTIONS/UPLOAD_ITEM_IMAGE',
    CHANGE_CAT_ID = 'ITEM_EDITOR_ACTIONS/CHANGE_CAT_ID',
    CHANGE_SUB_CAT_GROUP_ID = 'ITEM_EDITOR_ACTIONS/CHANGE_SUB_CAT_GROUP_ID',
    CHANGE_SUB_CAT_ID = 'ITEM_EDITOR_ACTIONS/CHANGE_SUB_CAT_ID',
    CLEAR_CAT_AND_FEATURE = 'ITEM_EDITOR_ACTIONS/CLEAR_CAT_AND_FEATURE',
    TOGGLE_FEATURE = 'ITEM_EDITOR_ACTIONS/TOGGLE_FEATURE',
    CLEAR_ALL = 'ITEM_EDITOR_ACTIONS/CLEAR_ALL',
    TRANSLATE_COLOR = 'ITEM_EDITOR_ACTIONS/TRANSLATE_COLOR',
    SET_COLOR = 'ITEM_EDITOR_ACTIONS/SET_COLOR',
    SET_COLORS = 'ITEM_EDITOR_ACTIONS/SET_COLORS',
    SET_IMAGE_URL = 'ITEM_EDITOR_ACTIONS/SET_IMAGE_URL',
    SET_LOADING = 'ITEM_EDITOR_ACTIONS/SET_LOADING',
    SET_ERROR = 'ITEM_EDITOR_ACTIONS/SET_ERROR',
}

export type ItemEditorUploadItemImageActionType = {
    type: ItemEditorActionEnum.UPLOAD_ITEM_IMAGE,
    file: File,
}
export type ItemEditorChangeCatIdActionType = {
    type: ItemEditorActionEnum.CHANGE_CAT_ID,
    catId: string | null
}
export type ItemEditorChangeSubCatGroupIdActionType = {
    type: ItemEditorActionEnum.CHANGE_SUB_CAT_GROUP_ID,
    subCatGroupId: string | null
}
export type ItemEditorChangeSubCatIdActionType = {
    type: ItemEditorActionEnum.CHANGE_SUB_CAT_ID,
    subCatId: string | null
}
export type ItemEditorClearCatAndFeatureActionType = {
    type: ItemEditorActionEnum.CLEAR_CAT_AND_FEATURE,
}
export type ItemEditorClearAllActionType = {
    type: ItemEditorActionEnum.CLEAR_ALL
}
export type ItemEditorToggleFeatureActionType = {
    type: ItemEditorActionEnum.TOGGLE_FEATURE
    featureId: string
}
export type TranslateColorActionType = {
    type: ItemEditorActionEnum.TRANSLATE_COLOR
    color: string
    index: number
}
export type SetItemEditorColorActionType = {
    type: ItemEditorActionEnum.SET_COLOR
    color: ItemColorType | null
    index: number
}
export type SetItemEditorColorsActionType = {
    type: ItemEditorActionEnum.SET_COLORS
    colors: ItemColorType[]
}
export type SetItemEditorImageUrlActionType = {
    type: ItemEditorActionEnum.SET_IMAGE_URL
    imageUrl: string | null
}
export type SetItemEditorLoadingActionType = {
    type: ItemEditorActionEnum.SET_LOADING
    loading: boolean
}
export type SetItemEditorErrorActionType = {
    type: ItemEditorActionEnum.SET_ERROR
    error: ErrorType | null
}

export type ItemEditorActionTypes = ItemEditorUploadItemImageActionType
                                    | ItemEditorChangeCatIdActionType
                                    | ItemEditorChangeSubCatGroupIdActionType
                                    | ItemEditorChangeSubCatIdActionType
                                    | ItemEditorClearCatAndFeatureActionType
                                    | ItemEditorClearAllActionType
                                    | ItemEditorToggleFeatureActionType
                                    | TranslateColorActionType
                                    | SetItemEditorColorActionType
                                    | SetItemEditorColorsActionType
                                    | SetItemEditorLoadingActionType
                                    | SetItemEditorErrorActionType
                                    | ClearCredentialActionType
                                    | SetItemEditorImageUrlActionType
