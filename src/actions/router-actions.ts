import { RouterActionEnum, RouterActionTypes } from '../action-types/router-action-types'

export const replaceRouterAction = (path: string | null, query?: RouterActionTypes['query']) => {
    return navigateRouterAction('replace', path, query)
}
export const pushRouterAction = (path: string | null, query?: RouterActionTypes['query']) => {
    return navigateRouterAction('push', path, query)
}
const navigateRouterAction = (
    routerAction: RouterActionTypes['routerAction'],
    pathname: RouterActionTypes['pathname'],
    query?: RouterActionTypes['query']): RouterActionTypes => {
    return {
        routerAction,
        pathname,
        query,
        type: RouterActionEnum.NAVIGATE,
    }
}
