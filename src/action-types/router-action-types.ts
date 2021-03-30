export enum RouterActionEnum {
    NAVIGATE = 'ROUTER_ACTIONS/NAVIGATE',
}

export type NavigateRouterActionType = {
    type: RouterActionEnum.NAVIGATE
    routerAction: 'replace' | 'push'
    pathname?: string | null
    query?: Record<string, any>
}
export type RouterActionTypes = NavigateRouterActionType
