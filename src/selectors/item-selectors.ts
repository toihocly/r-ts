import { ItemStateType } from '../data-types/item-state-types'

const selectItemState = (state: any): ItemStateType => {
    return state.itemState
}
export const selectRootCategory = (state: any) => {
    return selectItemState(state).rootCategory
}
export const selectCategoryInfo = (state: any, catId: string) => {
    return selectItemState(state).categoryMap[catId]
}
export const selectSubCatGroupIds = (state: any, catId: string) => {
    return selectCategoryInfo(state, catId)?.subCatGroupIds
}
export const selectCategoryIds = (state: any, catId: string) => {
    return selectCategoryInfo(state, catId)?.categoryChildrenIds
}
export const selectItemFeature = (state: any, catId: string) => {
    return selectItemState(state).featureMap[catId]
}
export const selectItemFeatureLengths = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.lengths
}
export const selectItemFeatureMaterials = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.materials
}
export const selectItemFeatureThicknesses = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.thicknesses
}
export const selectItemFeatureNecklines = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.necklines
}
export const selectItemFeaturePatterns = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.patterns
}
export const selectItemFeatureSleeves = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.sleeves
}
export const selectItemFeatureStyles = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.styles
}
export const selectItemFeatureSeasons = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.seasons
}
export const selectItemFeatureOccasions = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.occasions
}
export const selectItemFeatureForms = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.forms
}
export const selectItemFeatureHeights = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.heights
}
export const selectItemFeatureHeels = (state: any, catId: string) => {
    return selectItemFeature(state, catId)?.heels
}
export const selectItemColorPalette = (state: any) => {
    return selectItemState(state).itemColorPalette
}
