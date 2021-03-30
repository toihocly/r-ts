import BaseApiProvider from './BaseApiProvider'

export default class ItemApiProvider extends BaseApiProvider {
    upload = (image: File) => {
        const dataForm = new FormData()
        dataForm.append('image', image)
        return this.post('api/item/upload', null, dataForm, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    translateColor = (colors: string[]) => {
        return this.post('api/item/color', null, {
            color: colors,
        })
    }
    getItemColorPalette = () => {
        return this.post('api/item/getAllColor', null, null)
    }
}
