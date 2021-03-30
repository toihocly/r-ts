import { ItemEditorActionEnum, ItemEditorActionTypes } from '../action-types/item-editor-action-types'
import { ItemColorType } from '../data-types/item-state-types'
import { ErrorType } from '../data-types'

export const uploadItemImageAction = (file: File): ItemEditorActionTypes => {
    return {
        file,
        type: ItemEditorActionEnum.UPLOAD_ITEM_IMAGE,
    }
}
export const changeItemEditorCatIdAction = (catId: string | null): ItemEditorActionTypes => {
    return {
        catId,
        type: ItemEditorActionEnum.CHANGE_CAT_ID,
    }
}
export const changeItemEditorSubCatGroupIdAction = (subCatGroupId: string | null): ItemEditorActionTypes => {
    return {
        subCatGroupId,
        type: ItemEditorActionEnum.CHANGE_SUB_CAT_GROUP_ID,
    }
}
export const changeItemEditorSubCatIdAction = (subCatId: string | null): ItemEditorActionTypes => {
    return {
        subCatId,
        type: ItemEditorActionEnum.CHANGE_SUB_CAT_ID,
    }
}
export const clearItemEditorCatAndFeatureAction = (): ItemEditorActionTypes => {
    return {
        type: ItemEditorActionEnum.CLEAR_CAT_AND_FEATURE,
    }
}
export const clearItemEditorAllAction = (): ItemEditorActionTypes => {
    return {
        type: ItemEditorActionEnum.CLEAR_ALL,
    }
}
export const toggleItemEditorFeatureAction = (featureId: string): ItemEditorActionTypes => {
    return {
        featureId,
        type: ItemEditorActionEnum.TOGGLE_FEATURE,
    }
}
export const translateItemEditorColorAction = (color: string, index: number): ItemEditorActionTypes => {
    return {
        color,
        index,
        type: ItemEditorActionEnum.TRANSLATE_COLOR,
    }
}
export const setItemEditorColorAction = (color: ItemColorType | null, index: number): ItemEditorActionTypes => {
    return {
        color,
        index,
        type: ItemEditorActionEnum.SET_COLOR,
    }
}
export const setItemEditorColorsAction = (colors: ItemColorType[]): ItemEditorActionTypes => {
    return {
        colors,
        type: ItemEditorActionEnum.SET_COLORS,
    }
}
export const setItemEditorLoadingAction = (loading: boolean): ItemEditorActionTypes => {
    return {
        loading,
        type: ItemEditorActionEnum.SET_LOADING,
    }
}
export const setItemEditorErrorAction = (error: ErrorType | null): ItemEditorActionTypes => {
    return {
        error,
        type: ItemEditorActionEnum.SET_ERROR,
    }
}
export const setItemEditorImageUrlAction = (imageUrl: string | null): ItemEditorActionTypes => {
    return {
        imageUrl,
        type: ItemEditorActionEnum.SET_IMAGE_URL,
    }
}
