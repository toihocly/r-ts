import { AccessoriesItemCategoryData, ItemCategoryData, ItemFeatureData, UnderwearItemCategoryData } from '../data-types/item-state-types'
import { replace } from 'lodash'

export const getItemCategoryName = (cat: string) => {
    switch (cat) {
        case ItemCategoryData.PANTS:
            return 'pants'
        case ItemCategoryData.SKIRTS:
            return 'skirts'
        case ItemCategoryData.DRESSES:
            return 'dresses'
        case ItemCategoryData.TOPS:
            return 'tops'
        case ItemCategoryData.WARM_TOPS:
            return 'warm tops'
        case ItemCategoryData.OVERALLS:
            return 'overralls'
        case ItemCategoryData.JACKETS:
            return 'jackets and coats'
        case ItemCategoryData.FOOT_WEARS:
            return 'footwear'
        case ItemCategoryData.BAGS:
            return 'bags'
        case ItemCategoryData.ACCESSORIES:
            return 'accessories'
        case ItemCategoryData.JEWELLERIES:
            return 'jewellery'
        case ItemCategoryData.UNDER_WEARS:
            return 'underwear'
    }
    return ''
}
export const getItemSubCategoryName = (cat: string) => {
    switch (cat) {
        case AccessoriesItemCategoryData.GLOVES:
            return 'gloves'
        case AccessoriesItemCategoryData.HATS_AND_CAPS:
            return 'hats and caps'
        case AccessoriesItemCategoryData.TIES:
            return 'ties'
        case AccessoriesItemCategoryData.EYEWEAR:
            return 'eyewear'
        case AccessoriesItemCategoryData.SCARVES:
            return 'scarves'
        case AccessoriesItemCategoryData.BELTS:
            return 'belts'
        case AccessoriesItemCategoryData.SUSPENDERS:
            return 'suspenders'
        case AccessoriesItemCategoryData.WATCH:
            return 'watch'
        case UnderwearItemCategoryData.TIGHTS:
            return 'tights'
        case UnderwearItemCategoryData.SOCKS:
            return 'socks'
        case UnderwearItemCategoryData.PANTIES_UNDERPANTS:
            return 'panties underpants'
        case UnderwearItemCategoryData.UNDERWEAR_SETS:
            return 'underwear sets'
        case UnderwearItemCategoryData.BRAS:
            return 'bras'
        case UnderwearItemCategoryData.BODIES:
            return 'bodies'
    }
    return replace(cat, '-', ' ')
}
export const getItemFeatureName = (feature: string) => {
    switch (feature) {
        case ItemFeatureData.LENGTH:
            return 'length'
        case ItemFeatureData.MATERIAL:
            return 'material'
        case ItemFeatureData.THICKNESS:
            return 'thickness'
        case ItemFeatureData.NECKLINE:
            return 'neckline'
        case ItemFeatureData.PATTERN:
            return 'pattern'
        case ItemFeatureData.SLEEVES:
            return 'sleeves'
        case ItemFeatureData.STYLE:
            return 'style'
        case ItemFeatureData.SEASONS:
            return 'seasons'
        case ItemFeatureData.FORM:
            return 'form'
        case ItemFeatureData.HEIGHT:
            return 'height'
        case ItemFeatureData.HEELS:
            return 'heels'
    }
    return replace(replace(feature, /lenght-|material-|thickness-|pattern-|style-|occasion-/g, ''), '-', ' ')
}
