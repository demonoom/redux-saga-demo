export function deReducer(state = {}, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                userInfo: action.res
            }
        default:
            return {
                ...state,
                ...action
            }
    }
}