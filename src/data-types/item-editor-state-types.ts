import { ItemColorType } from './item-state-types'
import { ErrorType } from './index'

export type ItemEditorStateType = {
    catId: string | null
    subCatGroupId: string | null
    subCatId: string | null
    file: File | null
    imageUrl: string | null
    colors: ItemColorType[] | null
    features: Set<string>
    loading: boolean
    error?: ErrorType | null
}
