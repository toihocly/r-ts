import { ItemActionEnum, ItemActionTypes } from '../action-types/item-action-types'
import { ItemColorType } from '../data-types/item-state-types'

export const loadItemColorPaletteAction = (): ItemActionTypes => {
    return {
        type: ItemActionEnum.LOAD_ITEM_COLOR_PALETTE,
    }
}
export const setItemColorPaletteAction = (colors: ItemColorType[]): ItemActionTypes => {
    return {
        colors,
        type: ItemActionEnum.SET_ITEM_COLOR_PALETTE,
    }
}
