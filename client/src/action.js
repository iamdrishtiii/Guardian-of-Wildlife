import * as actions from './actiontypes'
import { api } from './assets/api'

export const getWildlife = () => {
    return async (dispatch) => {
      

        try {
            const response = await fetch(api);
            const result = await response.json();
            // console.log(result)
            dispatch(
                ((animal) => {
                    return {
                        type: actions.GET_WILDLIFE,
                        payload: animal,
                    }
                })(result)
            )
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getprograms = () => {
    return async (dispatch) => {
     
        try {
            const response = await fetch(api);
            const result = await response.json();
            // console.log(result)
            dispatch(
                ((program) => {
                    return {
                        type: actions.GET_PROGRAMS,
                        payload: program,
                    }
                })(result)
            )
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getblogs = () => {
    return async (dispatch) => {
   
        try {
            const response = await fetch(api);
            const result = await response.json();
            // console.log(result)
            dispatch(
                ((blog) => {
                    return {
                        type: actions.GET_BLOG,
                        payload: blog,
                    }
                })(result)
            )
        }
        catch (error) {
            console.log(error)
        }
    }
}  
