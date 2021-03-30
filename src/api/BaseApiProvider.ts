import { isEmpty, merge } from 'lodash'
import queryString from 'query-string'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export type ApiConfig = {
    apiUrl: string
    timeout: number
}

export default class BaseApiProvider {
    accessToken?: string | null
    static config: ApiConfig = Object.freeze({
        apiUrl: 'http://35.181.104.127',
        timeout: 30000,
    })
    static setConfig = (config: ApiConfig) => {
        BaseApiProvider.config = Object.freeze({
            ...BaseApiProvider.config,
            ...config,
        })
    }

    constructor(accessToken?: string | null) {
        this.accessToken = accessToken
    }

    getPath = (route: string, query?: Record<string, any> | null) => {
        if (!isEmpty(query)) {
            return `/${route}?${queryString.stringify(query!)}`

        }
        return `/${route}`
    }
    post = async <T>(
        route: string, query: Record<string, any> | null, params?: object | null,
        extraConfigs?: AxiosRequestConfig | null): Promise<T> => {
        let config = this.getRequestConfig()
        if (!isEmpty(extraConfigs)) {
            config = merge({}, config, extraConfigs)
        }
        const response = await axios.post(this.getPath(route, query), params, config)
        return this.processAxiosResponse(response)
    }
    patch = async <T>(route: string, query: Record<string, any> | null, params?: object | null): Promise<T> => {
        const response = await axios.patch(this.getPath(route, query), params, this.getRequestConfig())
        return this.processAxiosResponse(response)
    }
    get = async <T>(route: string, query?: Record<string, any>) => {
        const response = await axios.get<T>(this.getPath(route, query), this.getRequestConfig())
        return this.processAxiosResponse(response)
    }
    getContentType = () => {
        return 'application/json'
    }
    getRequestConfig = (): AxiosRequestConfig => {
        let requestConfig: AxiosRequestConfig = {
            baseURL: BaseApiProvider.config.apiUrl,
            timeout: BaseApiProvider.config.timeout,
            headers: {
                'Content-Type': this.getContentType(),
                'Access-Control-Allow-Origin': '*',
            },
        }
        if (!isEmpty(this.accessToken)) {
            requestConfig = {
                ...requestConfig,
                headers: {
                    ...requestConfig.headers,
                    'Authorization': this.accessToken,
                },
            }
        }
        return requestConfig
    }
    processAxiosResponse = (response: AxiosResponse) => {
        if (response?.status === 200) {
            return response.data
        }
        throw {
            code: response?.status,
            message: response?.data?.message,
        }
    }
}
