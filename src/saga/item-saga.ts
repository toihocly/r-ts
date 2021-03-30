import { call, put, select, takeLeading } from 'redux-saga/effects'
import { ItemActionEnum } from '../action-types/item-action-types'
import ItemApiProvider from '../api/ItemApiProvider'
import { selectAccessToken } from '../selectors/auth-selectors'
import { isEmpty, keyBy, map } from 'lodash'
import { transformApiItemColor } from '../transform-data/item-api-transformer'
import { setItemColorPaletteAction } from '../actions/item-actions'

function* loadItemColorPalette() {
    try {
        const token = yield select(selectAccessToken)
        if (!isEmpty(token)) {
            const itemApiProvider = new ItemApiProvider(token)
            const result = yield call(itemApiProvider.getItemColorPalette)
            const {
                errorCode,
                data,
            } = result
            if (errorCode === 0 && !isEmpty(data)) {
                const colors = map(keyBy(map(data, color => transformApiItemColor(color)), 'slug'), color => color)
                if (!isEmpty(colors)) {
                    yield put(setItemColorPaletteAction(colors))
                }
            }
        }
    } catch (e) {
    }
}

export default function* itemSaga() {
    yield takeLeading(ItemActionEnum.LOAD_ITEM_COLOR_PALETTE, loadItemColorPalette)
}
