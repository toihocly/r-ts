import { createAllCategoryData, createAllFeatureData, ItemStateType, rootCategory } from '../data-types/item-state-types'
import { keyBy } from 'lodash'
import { ItemActionEnum, ItemActionTypes } from '../action-types/item-action-types'

const initState: ItemStateType = {
    rootCategory,
    categoryMap: keyBy(createAllCategoryData(), 'catId'),
    featureMap: keyBy(createAllFeatureData(), 'featureId'),
    itemColorPalette: [],
}
export default (state: ItemStateType = initState, action: ItemActionTypes): ItemStateType => {
    switch (action.type) {
        case ItemActionEnum.ADD_ITEM_CATEGORY:
            return initState
        case ItemActionEnum.SET_ITEM_COLOR_PALETTE:
            return {
                ...state,
                itemColorPalette: action.colors,
            }
    }
    return state
}
