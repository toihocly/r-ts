import { ItemColorType } from '../data-types/item-state-types'
import { kebabCase, lowerCase } from 'lodash'

export const transformApiItemColor = (color: any): ItemColorType => {
    const {
        area,
        family,
        hsl,
        lmd,
        name,
    } = color
    return {
        source: family,
        lmd,
        area: {
            H: area.H,
            S: area.S,
            L: area.L,
        },
        name: name,
        hsl: {
            H: hsl.H,
            S: hsl.S,
            L: hsl.L,
        },
        slug: kebabCase(lowerCase(name)),
    }
}
