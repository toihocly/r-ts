import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectCategoryIds,
    selectItemColorPalette,
    selectItemFeature,
    selectItemFeatureForms,
    selectItemFeatureHeels,
    selectItemFeatureHeights,
    selectItemFeatureLengths,
    selectItemFeatureMaterials,
    selectItemFeatureNecklines,
    selectItemFeatureOccasions,
    selectItemFeaturePatterns,
    selectItemFeatureSeasons,
    selectItemFeatureSleeves,
    selectItemFeatureStyles,
    selectItemFeatureThicknesses,
    selectRootCategory,
    selectSubCatGroupIds,
} from '../selectors/item-selectors'
import { isEmpty, lowerCase } from 'lodash'
import { loadItemColorPaletteAction } from '../actions/item-actions'

export const useRootCategory = () => {
    return useSelector(selectRootCategory)
}
export const useCategoryIds = (catId: string) => {
    return useSelector(state => selectCategoryIds(state, catId))
}
export const useSubCatGroupIds = (catId: string) => {
    return useSelector(state => selectSubCatGroupIds(state, catId))
}
export const useItemFeatureLengths = (catId: string) => {
    return useSelector(state => selectItemFeatureLengths(state, catId))
}
export const useItemFeatureMaterials = (catId: string) => {
    return useSelector(state => selectItemFeatureMaterials(state, catId))
}
export const useItemFeatureThicknesses = (catId: string) => {
    return useSelector(state => selectItemFeatureThicknesses(state, catId))
}
export const useItemFeatureNecklines = (catId: string) => {
    return useSelector(state => selectItemFeatureNecklines(state, catId))
}
export const useItemFeaturePatterns = (catId: string) => {
    return useSelector(state => selectItemFeaturePatterns(state, catId))
}
export const useItemFeatureSleeves = (catId: string) => {
    return useSelector(state => selectItemFeatureSleeves(state, catId))
}
export const useItemFeatureStyles = (catId: string) => {
    return useSelector(state => selectItemFeatureStyles(state, catId))
}
export const useItemFeatureSeasons = (catId: string) => {
    return useSelector(state => selectItemFeatureSeasons(state, catId))
}
export const useItemFeatureOccasions = (catId: string) => {
    return useSelector(state => selectItemFeatureOccasions(state, catId))
}
export const useItemFeatureForms = (catId: string) => {
    return useSelector(state => selectItemFeatureForms(state, catId))
}
export const useItemFeatureHeights = (catId: string) => {
    return useSelector(state => selectItemFeatureHeights(state, catId))
}
export const useItemFeatureHeels = (catId: string) => {
    return useSelector(state => selectItemFeatureHeels(state, catId))
}
export const useHasItemFeature = (catId: string | null | undefined) => {
    return !!useSelector(state => selectItemFeature(state, catId || ''))
}
export const useItemColorPalette = () => {
    const dispatch = useDispatch()
    const colorPalette = useSelector(selectItemColorPalette)
    const isColorPaletteEmpty = isEmpty(colorPalette)
    React.useEffect(() => {
        dispatch(loadItemColorPaletteAction())
    }, [isColorPaletteEmpty])
    return React.useMemo(() => {
        if (colorPalette) {
            return colorPalette.sort((l, r) => {
                const lLower = lowerCase(l.name!)
                const rLower = lowerCase(r.name!)
                if (lLower > rLower) {
                    return 1
                }
                if (lLower < rLower) {
                    return -1
                }
                return 0
            })
        }
        return null
    }, [colorPalette])
}
