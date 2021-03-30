import { ItemEditorStateType } from '../data-types/item-editor-state-types'
import { isEmpty } from 'lodash'

const selectItemEditorState = (state: any): ItemEditorStateType => {
    return state.itemEditorState
}
export const selectItemEditorImageFile = (state: any) => {
    return selectItemEditorState(state).file
}
export const selectItemEditorImageUrl = (state: any) => {
    return selectItemEditorState(state).imageUrl
}
export const selectItemEditorCatId = (state: any) => {
    return selectItemEditorState(state).catId
}
export const selectItemEditorSubCatId = (state: any) => {
    return selectItemEditorState(state).subCatId
}
export const selectItemEditorSubCatGroupId = (state: any) => {
    return selectItemEditorState(state).subCatGroupId
}
export const selectItemEditorFeatures = (state: any) => {
    return selectItemEditorState(state).features
}
export const selectItemEditorHasCatAndFeatureData = (state: any) => {
    return !isEmpty(selectItemEditorCatId(state)) || !isEmpty(selectItemEditorSubCatId(state))
}
export const selectItemEditorIsEmpty = (state: any) => {
    return !selectItemEditorImageFile(state) && !selectItemEditorCatId(state) && !selectItemEditorSubCatId(state)
}
export const selectItemEditorColors = (state: any) => {
    return selectItemEditorState(state).colors
}
export const selectItemEditorIsLoading = (state: any) => {
    return selectItemEditorState(state).loading
}
export const selectItemEditorError = (state: any) => {
    return selectItemEditorState(state).error
}
