import { ItemEditorStateType } from '../data-types/item-editor-state-types'
import { ItemEditorActionEnum, ItemEditorActionTypes, SetItemEditorColorActionType } from '../action-types/item-editor-action-types'
import { ItemColorType } from '../data-types/item-state-types'
import { filter, update } from 'lodash'
import { MAX_NUMBER_OF_ITEM_COLORS } from '../containers/ItemEditor'
import { AuthActionEnum } from '../action-types/auth-action-types'

const initState: ItemEditorStateType = Object.freeze({
    file: null,
    imageUrl: null,
    catId: null,
    subCatGroupId: null,
    subCatId: null,
    colors: null,
    features: new Set<string>(),
    loading: false,
    error: null,
})
const setColor = (state: ItemEditorStateType, action: SetItemEditorColorActionType): ItemEditorStateType => {
    const {
        color,
        index = 0,
    } = action
    if (index < MAX_NUMBER_OF_ITEM_COLORS) {
        const currentColor: ItemColorType[] = state.colors || []
        if (color) {
            if (index >= currentColor.length) {
                return {
                    ...state,
                    colors: [...currentColor, color],
                }
            } else {
                return {
                    ...state,
                    colors: [...update(currentColor, index, () => {
                        return color
                    })],
                }
            }
        } else {
            return {
                ...state,
                colors: [...filter(currentColor, (value, predictIndex) => {
                    return predictIndex !== index
                })],
            }
        }
    }
    return state
}
export default (state: ItemEditorStateType = initState, action: ItemEditorActionTypes): ItemEditorStateType => {
    switch (action.type) {
        case ItemEditorActionEnum.UPLOAD_ITEM_IMAGE:
            return {
                ...state,
                file: action.file,
            }
        case ItemEditorActionEnum.CHANGE_CAT_ID:
            return {
                ...state,
                catId: action.catId,
                subCatGroupId: null,
                subCatId: null,
                features: new Set<string>(),
            }
        case ItemEditorActionEnum.CHANGE_SUB_CAT_GROUP_ID:
            return {
                ...state,
                subCatGroupId: action.subCatGroupId,
                subCatId: null,
                features: new Set<string>(),
            }
        case ItemEditorActionEnum.CHANGE_SUB_CAT_ID:
            return {
                ...state,
                subCatId: action.subCatId,
                features: new Set<string>(),
            }
        case ItemEditorActionEnum.CLEAR_CAT_AND_FEATURE:
            return {
                ...state,
                catId: null,
                subCatGroupId: null,
                subCatId: null,
            }
        case ItemEditorActionEnum.CLEAR_ALL:
            return initState
        case ItemEditorActionEnum.TOGGLE_FEATURE: {
            if (state.features.has(action.featureId)) {
                state.features.delete(action.featureId)
            } else {
                state.features.add(action.featureId)
            }
            return {
                ...state,
                features: new Set(state.features),
            }
        }
        case ItemEditorActionEnum.SET_COLOR:
            return setColor(state, action)
        case ItemEditorActionEnum.SET_LOADING:
            return {
                ...state,
                loading: action.loading,
            }
        case ItemEditorActionEnum.SET_ERROR:
            return {
                ...state,
                error: action.error,
            }
        // case ItemEditorActionEnum.SET_COLORS:
        //     return {
        //         ...state,
        //         colors: action.colors,
        //     }
        case ItemEditorActionEnum.SET_IMAGE_URL:
            return {
                ...state,
                imageUrl: action.imageUrl,
            }
        case AuthActionEnum.CLEAR_CREDENTIAL:
            return initState
    }
    return state
}
