import BaseApiProvider from './BaseApiProvider'

export default class MediaApiProvider extends BaseApiProvider {
    upload = (image: File): Promise<{
        errorCode: number,
        data: {
            url: string
        },
    }> => {
        const dataForm = new FormData()
        dataForm.append('image', image)
        return this.post('api/image/upload', null, dataForm, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
}
