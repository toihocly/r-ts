import { ErrorType } from '../data-types'

export const createError = (code: string | null | undefined, message?: string | null): ErrorType => {
    return {
        code,
        message,
    }
}
