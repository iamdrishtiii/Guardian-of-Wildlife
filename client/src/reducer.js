import * as actions from './actiontypes'
export const initState = {
    animalss: [],
    programs: [],
    blogs: [],
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_WILDLIFE:
            return { ...state, animalss: action.payload }
        case actions.GET_PROGRAMS:
            return { ...state, programs: action.payload }
        case actions.GET_BLOG:
            return { ...state, blogs: action.payload }
        
        default:
            return state
    }
}
export default reducer;