import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadItemImageAction } from '../actions/item-editor-actions'
import {
    selectItemEditorCatId,
    selectItemEditorColors,
    selectItemEditorError,
    selectItemEditorFeatures,
    selectItemEditorImageFile,
    selectItemEditorImageUrl,
    selectItemEditorIsLoading,
    selectItemEditorSubCatGroupId,
    selectItemEditorSubCatId,
} from '../selectors/item-editor-selectors'

export const useItemEditorUpload = () => {
    const dispatch = useDispatch()
    return React.useCallback((file: File) => {
        dispatch(uploadItemImageAction(file))
    }, [])
}
export const useItemEditorImageFile = () => {
    return useSelector(selectItemEditorImageFile)
}
export const useItemEditorImageUrl = () => {
    return useSelector(selectItemEditorImageUrl)
}
export const useItemEditorCatId = () => {
    return useSelector(selectItemEditorCatId)
}
export const useItemEditorFeatures = () => {
    return useSelector(selectItemEditorFeatures)
}
export const useItemEditorSubCatGroupId = () => {
    return useSelector(selectItemEditorSubCatGroupId)
}
export const useItemEditorColors = () => {
    return useSelector(selectItemEditorColors)
}
export const useItemEditorSubCatId = () => {
    return useSelector(selectItemEditorSubCatId)
}
export const useItemEditorIsLoading = () => {
    return useSelector(selectItemEditorIsLoading)
}
export const useItemEditorError = () => {
    return useSelector(selectItemEditorError)
}
