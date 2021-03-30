import { ItemColorType } from '../data-types/item-state-types'

export enum ItemActionEnum {
    ADD_ITEM_CATEGORY = 'ITEM_ACTIONS/ADD_ITEM_CATEGORY',
    LOAD_ITEM_COLOR_PALETTE = 'ITEM_ACTIONS/LOAD_ITEM_COLOR_PALETTE',
    SET_ITEM_COLOR_PALETTE = 'ITEM_ACTIONS/SET_ITEM_COLOR_PALETTE',
}

export type AddItemCategoryActionType = {
    type: ItemActionEnum.ADD_ITEM_CATEGORY
}

export type LoadItemColorPaletteActionType = {
    type: ItemActionEnum.LOAD_ITEM_COLOR_PALETTE
}
export type SetItemColorPaletteActionType = {
    type: ItemActionEnum.SET_ITEM_COLOR_PALETTE
    colors: ItemColorType[]
}
export type ItemActionTypes = AddItemCategoryActionType
                              | LoadItemColorPaletteActionType
                              | SetItemColorPaletteActionType
